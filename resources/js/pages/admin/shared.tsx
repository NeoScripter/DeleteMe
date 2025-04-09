import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import FooterTitle from '@/components/admin/pages/shared/footer';
import HeaderTitle from '@/components/admin/pages/shared/header';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/lib/types';
import { BlockType } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Общие элементы',
        href: '/shared',
    },
];

type PageProps = {
    blocks: BlockType;
};

export default function Shared({ blocks }: PageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Общее" />
            <div className="max-w-4xl space-y-4 px-2 md:px-4">
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Шапка</h2>
                        <AccordionWrapper>
                            <HeaderTitle label="Заголовок" block={pbk(blocks, 'header_title')} slug="header_title" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Подвал</h2>
                        <AccordionWrapper>
                            <FooterTitle label="Подвал" block={pbk(blocks, 'footer_title')} slug="footer_title" />
                        </AccordionWrapper>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
