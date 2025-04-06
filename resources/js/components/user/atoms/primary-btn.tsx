import { cn } from '@/lib/utils/cn';

type PrimaryBtnProps = {
    children: React.ReactNode;
    className?: string;
};
export default function PrimaryBtn({ children, className }: PrimaryBtnProps) {
    return (
        <a
            href='#form'
            className={cn(
                'bg-primary-btn-bg text-white transiton-colors w-max hover:bg-icon-violet block cursor-pointer rounded-full px-5 py-3 duration-200 ease-in xl:px-8 xl:py-4.5',
                className,
            )}
        >
            {children}
        </a>
    );
}
