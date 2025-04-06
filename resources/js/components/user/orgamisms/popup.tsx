import { usePopupContext } from '@/lib/hooks/use-popup-context';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { toast } from 'react-toastify';
import TextField from '../molecules/text-field';

export default function Popup() {
    const { isVisible, hidePopup } = usePopupContext();

    const { data, setData, post, errors } = useForm({
        name: '',
        phone: '',
        email: '',
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
        <Dialog
            transition
            open={isVisible}
            onClose={hidePopup}
            className="fixed inset-0 w-screen z-50 px-4 flex items-center justify-center bg-black/70 text-white transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <DialogPanel className="bg-primary-bg max-w-lg space-y-6 rounded-4xl px-6 py-9 sm:px-16 xl:px-12">
                <DialogTitle className="text-xl font-bold">Оставьте свои контактные данные и наш менеджер свяжется с вами</DialogTitle>
                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                    <TextField setter={setData} fieldName="name" value={data.name} error={errors.name} shouldFocus={true} placeholder="Имя" />

                    <TextField setter={setData} fieldName="phone" type="tel" value={data.phone} error={errors.phone} placeholder="Телефон" />

                    <TextField setter={setData} fieldName="email" value={data.email} type="email" error={errors.email} placeholder="Email" />

                    <Button
                        type="submit"
                        className="bg-primary-btn-bg transiton-colors hover:bg-icon-violet ml-auto block cursor-pointer rounded-full px-5 py-3 text-white duration-200 ease-in"
                    >
                        Оформить подписку
                    </Button>
                </form>
            </DialogPanel>
        </Dialog>
    );
}
