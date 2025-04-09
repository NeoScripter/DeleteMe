import { BlockType } from '@/lib/types/cmsBlock';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import PrimaryBtn from '../atoms/primary-btn';
import { reachGoal } from '@/lib/utils/reach-goal';

type PerkCard = {
    id?: string;
    image: string;
    title: string;
    description: string;
};

type PerksProps = {
    blocks: BlockType;
};

export default function Perks({ blocks }: PerksProps) {
    return (
        <section id="perks" className="p-5.5 pb-9 sm:px-24 sm:py-18 sm:pb-19 xl:flex xl:items-start xl:justify-between xl:px-31 xl:pt-17 xl:pb-23">
            <div className="mb-15 flex flex-col items-center gap-5 text-center sm:mb-35 sm:gap-3 xl:sticky xl:top-40 xl:mb-0 xl:items-start xl:text-left">
                {cbk(blocks, 'perks_title', 'text') && <h2 className="text-[2rem] font-bold xl:w-90 xl:text-4xl">{blocks.perks_title.text}</h2>}
                {cbk(blocks, 'perks_title', 'content') && <p className="text-lg sm:mb-4 xl:w-90">{blocks.perks_title.content}</p>}
                <PrimaryBtn onClick={() => reachGoal('nachat-ydalenie')} className="flex items-center gap-2 xl:ml-auto">
                    Начать удаление
                    <ArrowLongRightIcon className="size-6" />
                </PrimaryBtn>
            </div>

            <div className="mx-auto w-80 space-y-10 sm:w-133.5 sm:space-y-15 xl:mx-0 xl:w-114">
                {range(1, 4).map((number) => {
                    const item = pbk(blocks, `perk_card${number}`);

                    return item ? (
                        <PerkCard
                            key={`perk_card${number}${item.id}`}
                            title={item.text || ''}
                            description={item.content || ''}
                            image={item.image != null ? `/storage/${item.image}` : ''}
                        />
                    ) : null;
                })}
            </div>
        </section>
    );
}

function PerkCard({ title, image, description }: PerkCard) {
    return (
        <div className="flex flex-col items-center gap-5 text-center text-balance">
            <div className="w-37.5 sm:mb-5 sm:w-65 xl:w-54">
                <img src={image} alt={title} />
            </div>
            <p className="text-2xl font-bold sm:text-[2rem]">{title}</p>
            <p className="">{description}</p>
        </div>
    );
}
