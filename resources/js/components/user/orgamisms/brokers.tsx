import { BlockType } from '@/lib/types/cmsBlock';
import { cbk } from '@/lib/utils/pick-block';
import { reachGoal } from '@/lib/utils/reach-goal';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import PrimaryBtn from '../atoms/primary-btn';

type BrokersProps = {
    blocks: BlockType;
};

export default function Brokers({ blocks }: BrokersProps) {
    const images = cbk(blocks, 'brokers', 'images') ? blocks.brokers.images : [];
    const alts = cbk(blocks, 'brokers', 'contents') ? blocks.brokers.contents : [];

    return (
        <section className="bg-primary-bg px-6 pt-7 pb-10 text-white sm:px-14 sm:pt-13 sm:pb-15 xl:px-20 xl:pt-21.5 xl:pb-11">
            {cbk(blocks, 'brokers', 'text') && (
                <h3 className="mb-7 text-center text-[2rem] font-bold text-balance sm:mb-10 sm:text-4xl xl:mb-12 xl:text-5xl">
                    {blocks.brokers.text}
                </h3>
            )}
            <PrimaryBtn onClick={() => reachGoal('Podkluchit-na-god')} className="mx-auto mb-9 flex items-center gap-2 sm:mb-12 xl:mb-17">
                Подключить защиту на год
                <ArrowLongRightIcon className="size-6" />
            </PrimaryBtn>

            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 xl:flex-nowrap xl:justify-between">
                <div className="basis-[45%] xl:basis-41.25">
                    {images[0] && (
                        <img src={`/storage/${images[0].path}`} alt={alts?.[0] || ''} className="ml-auto w-1/2 object-contain xl:ml-0 xl:w-auto" />
                    )}
                </div>
                <div className="basis-[45%] xl:basis-42">
                    {images[1] && <img src={`/storage/${images[1].path}`} alt={alts?.[1] || ''} className="w-1/2 object-contain xl:w-auto" />}
                </div>
                <div className="w-[28%] xl:basis-57">
                    {images[2] && <img src={`/storage/${images[2].path}`} alt={alts?.[2] || ''} className="object-contain" />}
                </div>
                <div className="w-[28%] xl:basis-48">
                    {images[3] && <img src={`/storage/${images[3].path}`} alt={alts?.[3] || ''} className="object-contain" />}
                </div>
                <div className="w-[28%] xl:basis-60">
                    {images[4] && <img src={`/storage/${images[4].path}`} alt={alts?.[4] || ''} className="object-contain" />}
                </div>
            </div>
        </section>
    );
}
