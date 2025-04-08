import ChartTabletImg from '@/assets/images/chart/chart-tablet.webp';
import ChartImg from '@/assets/images/chart/chart.webp';
import { BlockType } from '@/lib/types/cmsBlock';
import { cbk } from '@/lib/utils/pick-block';
import PrimaryBtn from '../atoms/primary-btn';

type ChartProps = {
    blocks: BlockType;
};

export default function Chart({ blocks }: ChartProps) {
    return (
        <section className="mb-11 flex flex-col items-center gap-11 md:mb-15.5 md:flex-row md:items-start md:gap-8 md:px-4 xl:mb-0 xl:items-center xl:gap-19 xl:px-0">
            <div className="md:hidden xl:block xl:w-135.75 xl:shrink-0">
                <img src={ChartImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div className="hidden w-[275px] shrink-0 md:block xl:hidden">
                <img src={ChartTabletImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div className="sm:text-center md:text-left">
                {cbk(blocks, 'stats_title', 'text') && (
                    <p className="mb-5.5 text-[1.75rem] leading-[120%] font-bold text-balance md:relative md:-left-16 md:mb-12 md:text-[2.5rem] xl:static xl:mb-8">
                        {blocks.stats_title.text}
                    </p>
                )}
                {cbk(blocks, 'stats_title', 'content') && <p className="mb-6.5 md:mb-11 xl:mb-8">{blocks.stats_title.content}</p>}
                <PrimaryBtn className="sm:mx-auto md:mx-0">Присоединиться прямо сейчас</PrimaryBtn>
            </div>
        </section>
    );
}
