import { Button } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { CircleCheck } from 'lucide-react';
import TextField from '../molecules/text-field';
import { toast } from 'react-toastify';

export default function Webform() {
    const { data, setData, post, errors } = useForm({
        name: '',
        phone: '',
        email: '',
    });

    const notify = () => toast("Ваше сообщение успешно отправлено!");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('mail'), { preserveScroll: true, onSuccess: () => {
            notify();
        }, });
    }

    return (
        <section className="flex flex-col gap-10 px-3 text-white sm:gap-10.5 sm:px-11 xl:flex-row xl:px-30 max-w-172 mx-auto xl:max-w-full">
            <div className="bg-primary-bg space-y-6 rounded-4xl px-6 py-9 sm:px-16 xl:px-12">
                <p className="text-xl font-bold">Оставьте свои контактные данные и наш менеджер свяжется с вами</p>

                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                    <TextField setter={setData} fieldName="name" value={data.name} error={errors.name} shouldFocus={true} placeholder="Имя" />

                    <TextField setter={setData} fieldName="phone" type="tel" value={data.phone} error={errors.phone} placeholder="Телефон" />

                    <TextField
                        setter={setData}
                        fieldName="email"
                        value={data.email}
                        type="email"
                        error={errors.email}
                        placeholder="Email"
                    />

                    <Button type="submit" className="bg-primary-btn-bg text-white transiton-colors hover:bg-icon-violet block cursor-pointer rounded-full px-5 py-3 duration-200 ease-in ml-auto">Оформить подписку</Button>
                </form>
            </div>

            <div className="bg-primary-bg space-y-6 rounded-4xl px-8 py-10 sm:px-11">
                <p className="text-3xl font-bold">Все тарифные планы включают</p>

                <ul className="space-y-6">
                    <ListItem content="В среднем 15 запросов Google удаляются в течение нескольких дней" />
                    <ListItem content="Ежеквартальные отчеты о конфиденциальности" />
                    <ListItem content="Личный эксперт DeleteMe" />
                    <ListItem content="Бесплатно: новые варианты отказа от отслеживания добавляются в течение года без дополнительной оплаты" />
                    <ListItem content="100% Гарантия результата" />
                </ul>
            </div>
        </section>
    );
}

type ListItemProps = {
    content: string;
};

function ListItem({ content }: ListItemProps) {
    return (
        <li className="flex items-start gap-4">
            <CircleCheck className="text-icon-violet mt-1 size-5 shrink-0" />
            <p className="opacity-70">{content}</p>
        </li>
    );
}
