import { isLosslessNumber, parse, stringify } from 'lossless-json';
import { numericModels } from './generated/numeric-shapes.js';

export type NumericShape = 'int64' | { ref: string } | { array: NumericShape } |
  { record: NumericShape } | { fields: Record<string, NumericShape> };

function resolveShape(shape?: NumericShape): NumericShape | undefined {
  while (shape && typeof shape === 'object' && 'ref' in shape) shape = numericModels[shape.ref];
  return shape;
}

function childShape(shape: NumericShape | undefined, key: string): NumericShape | undefined {
  shape = resolveShape(shape);
  if (!shape || typeof shape === 'string') return undefined;
  if ('array' in shape) return shape.array;
  if ('record' in shape) return shape.record;
  return 'fields' in shape ? shape.fields[key] : undefined;
}

/** Reject IDs that have already lost precision before reaching the serializer. */
export function validateIntegers(value: unknown, shape?: NumericShape, path = 'request'): void {
  shape = resolveShape(shape);
  if (shape === 'int64') {
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
      throw new TypeError(`${path} must be a safe integer number or bigint`);
    }
  } else if (shape && value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) validateIntegers(item, childShape(shape, key), `${path}.${key}`);
  }
}

export function stringifyJson(value: unknown): string | undefined {
  return stringify(value);
}

export function parseJson(text: string, shape?: NumericShape): unknown {
  const convert = (value: unknown, current?: NumericShape): unknown => {
    current = resolveShape(current);
    if (isLosslessNumber(value)) {
      const number = Number(value.value);
      return current === 'int64' && !Number.isSafeInteger(number) ? BigInt(value.value) : number;
    }
    if (Array.isArray(value)) return value.map((item, index) => convert(item, childShape(current, String(index))));
    if (value && typeof value === 'object') {
      for (const [key, item] of Object.entries(value)) {
        (value as Record<string, unknown>)[key] = convert(item, childShape(current, key));
      }
    }
    return value;
  };
  return convert(parse(text), shape);
}
