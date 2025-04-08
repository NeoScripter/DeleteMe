import { cn } from '@/lib/utils/cn';
import { Button } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import TextField from '../molecules/text-field';
import CheckboxField from './checkbox-field';

export default function RequestForm() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        phone: '',
        email: '',
        consent: false,
    });

    const notify = () => toast('Ваше сообщение успешно отправлено!');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('mail'), {
            preserveScroll: true,
            onSuccess: () => {
                notify();
            },
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
            <TextField setter={setData} fieldName="name" value={data.name} error={errors.name} shouldFocus={true} placeholder="Имя" required={true} />

            <TextField setter={setData} fieldName="phone" type="tel" value={data.phone} error={errors.phone} placeholder="Телефон" />

            <TextField setter={setData} fieldName="email" value={data.email} type="email" error={errors.email} placeholder="Email" required={true} />

            <CheckboxField
                label="Даю согласие на обработку персональных данных в соответствии с Политикой конфиденциальности"
                setter={setData}
                fieldName="consent"
                value={data.consent}
                error={errors.consent}
                required={true}
            />

            <Button
                type="submit"
                disabled={processing}
                className={cn(
                    'bg-primary-btn-bg transiton-colors hover:bg-icon-violet ml-auto block cursor-pointer rounded-full px-5 py-3 text-white duration-200 ease-in',
                    processing && 'opacity-60',
                )}
            >
                Оставить заявку
            </Button>
        </form>
    );
}
