import { usePopupContext } from '@/lib/hooks/use-popup-context';
import { cn } from '@/lib/utils/cn';
import { Button } from '@headlessui/react';

type SecondaryBtnProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};
export default function SecondaryBtn({ children, className, onClick }: SecondaryBtnProps) {
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
                'transiton-colors block cursor-pointer rounded-full px-5 py-3 ring-2 duration-200 ease-in ring-inset hover:bg-white/20 xl:px-8 xl:py-4.5',
                className,
            )}
        >
            {children}
        </Button>
    );
}
