import AddItemBtn from '@/components/admin/elements/add-item-btn';
import RemoveItemBtn from '@/components/admin/elements/remove-item-btn';
import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import AgreementCard from '@/components/admin/pages/agreement/agreement-section';
import AgreementTitle from '@/components/admin/pages/agreement/agreement-title';
import AppLayout from '@/layouts/app-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BreadcrumbItem } from '@/lib/types';
import { BlockType } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Пользовательское соглашение',
        href: '/agreement',
    },
];

type PageProps = {
    blocks: BlockType;
};

export default function Agreement({ blocks }: PageProps) {
    const { value: sectionCount, increment: addSection, decrement: removeSection } = useBlockRange('agreement_section', blocks);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Политика" />
            <div className="max-w-4xl space-y-4 px-2 md:px-4">
                <div>
                    <h2 className="p-2 text-lg font-bold">Правила сервиса</h2>
                    <AccordionWrapper>
                        <AgreementTitle label="Заголовок" block={pbk(blocks, 'agreement_title')} slug="agreement_title" />

                        {range(1, sectionCount).map((digit) => (
                            <div key={`agreement_section${digit}`} className="flex items-start gap-4">
                                <div className="flex-1">
                                    <AgreementCard
                                        label={`Секция ${digit}`}
                                        block={pbk(blocks, `agreement_section${digit}`)}
                                        slug={`agreement_section${digit}`}
                                    />
                                </div>
                                <RemoveItemBtn
                                    onClick={removeSection}
                                    className="mt-4"
                                    data={{ page_slug: 'agreement', block_slug: `agreement_section${digit}` }}
                                />
                            </div>
                        ))}
                        <AddItemBtn className="mt-2 mb-4" content="Добавить секцию" onClick={addSection} />
                    </AccordionWrapper>
                </div>
            </div>
        </AppLayout>
    );
}
