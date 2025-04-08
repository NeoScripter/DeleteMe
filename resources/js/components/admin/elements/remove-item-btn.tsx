import { cn } from '@/lib/utils/cn';
import { Link } from '@inertiajs/react';
import { ListX } from 'lucide-react';

type RemoveItemBtnProps = {
    onClick: () => void;
    className?: string;
    routeName?: string;
    data?: {
        page_slug: string;
        block_slug: string;
    }
};
export default function RemoveItemBtn({ onClick, className, data, routeName = route('admin.block.destroy') }: RemoveItemBtnProps) {
    return (
        /*  <Button onClick={onClick} variant="ghost" type="button" className={cn('cursor-pointer', className)}>
            <ListX className="size-5" />
        </Button> */

        <Link
            preserveScroll
            href={routeName}
            method="delete"
            onClick={onClick}
            as="button"
            type="button"
            data={data && data}
            className={cn('cursor-pointer', className)}
        >
            <ListX className="size-5" />
        </Link>
    );
}
