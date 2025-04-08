import { Field, Input } from '@headlessui/react';
import clsx from 'clsx';
import ErrorField from './error-field';
import { Asterisk } from 'lucide-react';

type TextFieldProps = {
    setter: (key: string, value: string) => void;
    fieldName: string;
    shouldFocus?: boolean;
    value: string;
    error?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
};

export default function TextField({ setter, fieldName, error, shouldFocus = false, placeholder = '', type = 'text', value, required = false }: TextFieldProps) {
    return (
        <Field className="relative">
            {required && <Asterisk className='size-6 absolute right-2 top-1/2 -translate-y-1/2 text-red-500' />}
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
                required={required}
            />
            {error && <ErrorField>{error}</ErrorField>}
        </Field>
    );
}
