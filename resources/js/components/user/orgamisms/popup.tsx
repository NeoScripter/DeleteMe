import { usePopupContext } from '@/lib/hooks/use-popup-context';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import RequestForm from '../molecules/request-form';

export default function Popup() {
    const { isVisible, hidePopup } = usePopupContext();

    return (
        <Dialog
            transition
            open={isVisible}
            onClose={hidePopup}
            className="fixed inset-0 w-screen z-50 px-4 flex items-center justify-center bg-black/70 text-white transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <DialogPanel className="bg-primary-bg max-w-lg space-y-6 rounded-4xl px-6 py-9 sm:px-16 xl:px-12">
                <DialogTitle className="text-xl font-bold">Оставьте свои контактные данные и наш менеджер свяжется с вами</DialogTitle>
                <RequestForm />
            </DialogPanel>
        </Dialog>
    );
}
