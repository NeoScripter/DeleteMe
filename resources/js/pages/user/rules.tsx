import DocsHeader from '@/components/user/molecules/docs-header';
import UserLayout from '@/layouts/user-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BlockType } from '@/lib/types/cmsBlock';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';

type RulesProps = {
    blocks: BlockType;
    shared: BlockType;
};

export default function Rules({ blocks, shared }: RulesProps) {
    const { value: sectionCount } = useBlockRange('rules_section', blocks);

    return (
        <UserLayout blocks={shared} title="Правила">
            <div>
                {cbk(shared, 'header_title', 'text') && <DocsHeader title={shared.header_title.text || ''} />}
                <main className="space-y-6 px-8 py-10 sm:px-16 lg:space-y-8 xl:px-30 xl:py-16">
                    {cbk(blocks, 'rules_title', 'text') && (
                        <h1 className="mb-10 text-2xl font-bold sm:text-3xl xl:mb-16 xl:text-4xl">{blocks.rules_title.text}</h1>
                    )}

                    {range(1, sectionCount).map((digit) => {
                        const section = pbk(blocks, `rules_section${digit}`);
                        return section != null ? (
                            <div key={`section-${digit}`}>
                                {section.contents?.map((text, idx) => <p key={`rules_section-${digit}-${idx}`}>{text}</p>)}
                            </div>
                        ) : null;
                    })}
                </main>
            </div>
        </UserLayout>
    );
}
