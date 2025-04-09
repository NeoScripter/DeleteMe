import UserLayout from '@/layouts/user-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BlockType } from '@/lib/types/cmsBlock';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Link } from '@inertiajs/react';

type AgreementProps = {
    blocks: BlockType;
    shared: BlockType;
};

export default function Agreement({ blocks, shared }: AgreementProps) {
    const { value: sectionCount } = useBlockRange('agreement_section', blocks);

    return (
        <UserLayout blocks={shared} title="Соглашение">
            <div>
                <header className="bg-primary-bg px-8 py-10 sm:px-16 xl:px-30 xl:py-16">
                    {cbk(shared, 'header_title', 'text') && (
                        <Link href={route('home')} className="text-3xl font-bold text-white xl:text-4xl">
                            {shared.header_title.text}
                        </Link>
                    )}
                </header>
                <main className="space-y-6 px-8 py-10 sm:px-16 lg:space-y-8 xl:px-30 xl:py-16">
                    {cbk(blocks, 'agreement_title', 'text') && (
                        <h1 className="mb-10 text-2xl font-bold sm:text-3xl xl:mb-16 xl:text-4xl">{blocks.agreement_title.text}</h1>
                    )}

                    {range(1, sectionCount).map((digit) => {
                        const section = pbk(blocks, `agreement_section${digit}`);
                        return section != null ? (
                            <div key={`section-${digit}`}>
                                {section.contents?.map((text, idx) => <p key={`agreement_section-${digit}-${idx}`}>{text}</p>)}
                            </div>
                        ): null;
                    })}
                </main>
            </div>
        </UserLayout>
    );
}
