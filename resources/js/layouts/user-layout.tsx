import '@/assets/fonts/fonts.css';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface UserLayoutProps {
    title?: string;
}

export default function UserLayout({ children, title = '' }: PropsWithChildren<UserLayoutProps>) {
    return (
        <>
            <Head title={title}></Head>
            <div className="text-primary-text min-h-screen bg-white">
                <div className="mx-auto max-w-360 opacity-100 transition-all duration-750 lg:grow starting:translate-x-1/2 starting:opacity-0">
                    {children}


                    <footer>this is footer</footer>
                </div>
            </div>
        </>
    );
}
