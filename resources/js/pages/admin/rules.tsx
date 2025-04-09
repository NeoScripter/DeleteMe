
import AddItemBtn from '@/components/admin/elements/add-item-btn';
import RemoveItemBtn from '@/components/admin/elements/remove-item-btn';
import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import RulesCard from '@/components/admin/pages/rules/rules-section';
import RulesTitle from '@/components/admin/pages/rules/rules-title';
import AppLayout from '@/layouts/app-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BreadcrumbItem } from '@/lib/types';
import { BlockType } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Правила сервиса',
        href: '/rules',
    },
];

type PageProps = {
    blocks: BlockType;
};

export default function Rules({ blocks }: PageProps) {
   const { value: sectionCount, increment: addSection, decrement: removeSection } = useBlockRange('rules_section', blocks);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Политика" />
            <div className="max-w-4xl space-y-4 px-2 md:px-4">
                <div>
                    <h2 className="p-2 text-lg font-bold">Правила сервиса</h2>
                    <AccordionWrapper>
                        <RulesTitle label="Заголовок" block={pbk(blocks, 'rules_title')} slug="rules_title" />

                        {range(1, sectionCount).map((digit) => (
                            <div key={`rules_section${digit}`} className="flex items-start gap-4">
                                <div className="flex-1">
                                    <RulesCard
                                        label={`Секция ${digit}`}
                                        block={pbk(blocks, `rules_section${digit}`)}
                                        slug={`rules_section${digit}`}
                                    />
                                </div>
                                <RemoveItemBtn
                                    onClick={removeSection}
                                    className="mt-4"
                                    data={{ page_slug: 'rules', block_slug: `rules_section${digit}` }}
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
