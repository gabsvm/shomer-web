export type FieldSpec = {
  name: string;
  required?: boolean;
  maxLength?: number;
  pattern?: RegExp;
};

export function validateAndExtract(
  data: FormData,
  specs: FieldSpec[],
): { ok: true; values: Record<string, string> } | { ok: false; error: string } {
  const values: Record<string, string> = {};

  for (const spec of specs) {
    const raw = data.get(spec.name);
    const value = typeof raw === "string" ? raw.trim() : "";

    if (spec.required && !value) {
      return { ok: false, error: `Missing field: ${spec.name}` };
    }

    if (spec.maxLength && value.length > spec.maxLength) {
      return { ok: false, error: `Field too long: ${spec.name}` };
    }

    if (spec.pattern && value && !spec.pattern.test(value)) {
      return { ok: false, error: `Invalid format: ${spec.name}` };
    }

    values[spec.name] = value;
  }

  return { ok: true, values };
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
