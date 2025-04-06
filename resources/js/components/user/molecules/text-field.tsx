import { Field, Input } from '@headlessui/react';
import clsx from 'clsx';
import ErrorField from './error-field';

type TextFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    shouldFocus?: boolean;
    value: string;
    error?: string;
    placeholder?: string;
    type?: string;
};

export default function TextField({ setter, fieldName, error, shouldFocus = false, placeholder = '', type = 'text', value }: TextFieldProps) {
    return (
        <Field>
            <Input
                onChange={(e) => setter(fieldName, e.target.value)}
                name={fieldName}
                type={type}
                value={value}
                className={clsx(
                    'data-[hover]:bg-gray-100 data-[focus]:shadow-input w-full rounded-3xl border px-3 py-2 outline-none data-[focus]:ring-1 text-gray-500 bg-white',
                    error && 'border-red-600!',
                )}
                autoFocus={shouldFocus}
                placeholder={placeholder}
            />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
