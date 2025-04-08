import { usePopupContext } from '@/lib/hooks/use-popup-context';
import { cn } from '@/lib/utils/cn';
import { Button } from '@headlessui/react';

type PrimaryBtnProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};
export default function PrimaryBtn({ children, className, onClick }: PrimaryBtnProps) {
    const { showPopup } = usePopupContext();

    function handleClick() {
        showPopup();
        if (onClick != null) {
            onClick();
        }
    }

    return (
        <Button
            onClick={handleClick}
            className={cn(
                'bg-primary-btn-bg text-white transiton-colors hover:bg-icon-violet block cursor-pointer rounded-full px-5 py-3 duration-200 ease-in xl:px-8 xl:py-4.5',
                className,
            )}
        >
            {children}
        </Button>
    );
}
