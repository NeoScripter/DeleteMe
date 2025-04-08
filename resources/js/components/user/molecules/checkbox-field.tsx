import { Checkbox, Field, Label } from '@headlessui/react';

type CheckboxFieldProps<T extends Record<string, unknown>> = {
    label: string;
    setter: <K extends keyof T>(key: K, value: T[K]) => void;
    fieldName: keyof T;
    value: boolean;
    error?: string;
    required?: boolean;
};

export default function CheckboxField<T extends Record<string, unknown>>({ label, setter, fieldName, value, error }: CheckboxFieldProps<T>) {
    return (
        <div>
            <Field className="flex items-center gap-4">
                <Checkbox
                    checked={value}
                    onChange={(checked: boolean) => setter(fieldName, checked as T[typeof fieldName])}
                    className="group block size-4 shrink-0 rounded-full bg-white data-[checked]:bg-blue-500 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[checked]:data-[disabled]:bg-gray-500"
                >
                    <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Checkbox>
                <Label>{label}</Label>
            </Field>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
}
