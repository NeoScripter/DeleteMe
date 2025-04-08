import { BlockType, CmsBlock } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';

type StatsProps = {
    blocks: BlockType;
};

export default function Stats({ blocks }: StatsProps) {
    return (
        <div className="mb-10 grid place-content-center gap-7 sm:mb-21 sm:grid-cols-3 sm:gap-10 xl:mb-14">

            {range(1, 3).map((digit) => (
                <StatCard key={`stats-card${digit}`} block={pbk(blocks, `stats_card${digit}`)} />
            ))}
        </div>
    );
}

type StatCardProps = {
    block: CmsBlock
};

function StatCard({ block }: StatCardProps) {
    return (
        <div className="max-w-82.75 xl:max-w-77.75">
            <p className="mb-3 text-4xl font-bold sm:mb-5 sm:text-5xl">{block.text}</p>
            <p>{block.content}</p>
        </div>
    );
}
