import AddItemBtn from '@/components/admin/elements/add-item-btn';
import RemoveItemBtn from '@/components/admin/elements/remove-item-btn';
import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import PolicyCard from '@/components/admin/pages/policy/policy-section';
import PolicyTitle from '@/components/admin/pages/policy/policy-title';
import AppLayout from '@/layouts/app-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BreadcrumbItem } from '@/lib/types';
import { BlockType } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Политика конфиденциальности',
        href: '/policy',
    },
];

type PageProps = {
    blocks: BlockType;
};

export default function Policy({ blocks }: PageProps) {
    const { value: sectionCount, increment: addSection, decrement: removeSection } = useBlockRange('policy_section', blocks);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Политика" />
            <div className="max-w-4xl space-y-4 px-2 md:px-4">
                <div>
                    <h2 className="p-2 text-lg font-bold">Политика конфиденциальности</h2>
                    <AccordionWrapper>
                        <PolicyTitle label="Заголовок" block={pbk(blocks, 'policy_title')} slug="policy_title" />

                        {range(1, sectionCount).map((digit) => (
                            <div key={`policy_section${digit}`} className="flex items-start gap-4">
                                <div className="flex-1">
                                    <PolicyCard
                                        label={`Секция ${digit}`}
                                        block={pbk(blocks, `policy_section${digit}`)}
                                        slug={`policy_section${digit}`}
                                    />
                                </div>
                                <RemoveItemBtn
                                    onClick={removeSection}
                                    className="mt-4"
                                    data={{ page_slug: 'policy', block_slug: `policy_section${digit}` }}
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
