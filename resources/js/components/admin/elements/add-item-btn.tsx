import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';
import { ListPlus } from 'lucide-react';

type AddItemBtnProps = {
    onClick: () => void;
    content: string;
    className?: string;
};
export default function AddItemBtn({ onClick, content, className }: AddItemBtnProps) {
    return (
        <Button onClick={onClick} type="button" variant="outline" className={cn("ml-auto flex cursor-pointer items-center gap-2", className)}>
            {content}
            <ListPlus />
        </Button>
    );
}
