import '@/assets/fonts/fonts.css';
import Footer from '@/components/user/orgamisms/footer';
import { BlockType } from '@/lib/types/cmsBlock';
import { Head } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

interface UserLayoutProps {
    title?: string;
    blocks: BlockType;
}

export default function UserLayout({ children, title = '', blocks }: PropsWithChildren<UserLayoutProps>) {
    return (
        <>
            <Head title={title}></Head>
            <div className="text-primary-text min-h-screen bg-white tracking-wide">
                <div className="mx-auto max-w-360 opacity-100 transition-all duration-750 lg:grow starting:translate-x-1/2 starting:opacity-0">
                    {children}

                    <Footer blocks={blocks} />
                </div>
            </div>

            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} theme="light" />
        </>
    );
}
