import { Head } from '@inertiajs/react';

import AppearanceTabs from '@/components/auth/appearance-tabs';
import HeadingSmall from '@/components/auth/heading-small';
import { type BreadcrumbItem } from '@/lib/types';

import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Настройки темы',
        href: '/settings/appearance',
    },
];

export default function Appearance() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Настройки темы" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Тема" description="Здесь вы можете поменять тему админ панели" />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
