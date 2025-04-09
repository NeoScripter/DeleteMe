import { Link } from '@inertiajs/react';

type DocsHeaderProps = {
    title: string;
};
export default function DocsHeader({ title }: DocsHeaderProps) {
    return (
        <header className="bg-primary-bg px-8 py-10 sm:px-16 xl:px-30 xl:py-16">
            <Link prefetch href={route('home')} className="text-3xl font-bold text-white xl:text-4xl">
                {title}
            </Link>
        </header>
    );
}
