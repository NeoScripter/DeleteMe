import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { ListX } from 'lucide-react';

type RemoveItemBtnProps = {
    onClick: () => void;
    className?: string;
};
export default function RemoveItemBtn({ onClick, className }: RemoveItemBtnProps) {
    return (
        <Button onClick={onClick} variant="ghost" type="button" className={cn('cursor-pointer', className)}>
            <ListX className="size-5" />
        </Button>
    );
}
