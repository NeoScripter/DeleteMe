import ChoiceImg from '@/assets/images/choice/choice.webp';
import { BlockType, CmsBlock } from '@/lib/types/cmsBlock';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { CheckBadgeIcon, ClockIcon, LifebuoyIcon, StarIcon } from '@heroicons/react/24/solid';

type ChoiceProps = {
    blocks: BlockType;
};

export default function Choice({ blocks }: ChoiceProps) {
    return (
        <section id="choice" className="text-primary-text px-6 pt-12.5 pb-18 sm:px-17 sm:pt-35.5 sm:pb-23.5 xl:px-32 xl:pt-0 xl:pb-22">
            <div className="relative mx-auto max-w-76.75 sm:max-w-164 xl:max-w-full">
                <div className="bg-marquee-bg absolute -top-70 right-0 left-0 z-10 overflow-clip px-6 pt-8 text-center text-balance sm:-top-72 sm:px-10.5 sm:pt-12 xl:-top-50 xl:flex xl:items-center xl:gap-14 xl:pt-0 xl:pr-30 xl:text-left">
                    <div className="mb-4 xl:order-1">
                        {cbk(blocks, 'choice', 'text') && <p className="mb-5 text-[2rem] font-bold sm:text-4xl xl:mb-7">{blocks.choice.text}</p>}

                        {cbk(blocks, 'choice', 'content') && <p>{blocks.choice.content}</p>}
                    </div>
                    <img
                        src={ChoiceImg}
                        alt="Поисковое окно Яндекс поиска"
                        className="mx-auto object-contain object-bottom xl:mx-0 xl:w-132 xl:shrink-0"
                    />
                </div>
            </div>

            <div className="pt-70 sm:pt-100 xl:pt-65">
                {cbk(blocks, 'choice_title', 'text') && (
                    <h3 className="mb-15 text-center text-[2rem] font-bold sm:text-4xl xl:mb-9 xl:text-5xl">{blocks.choice_title.text}</h3>
                )}

                <div className="mx-auto grid max-w-145 gap-8 xl:max-w-full xl:grid-cols-2 xl:gap-6">
                    {range(1, 4).map((digit) => (
                        <ChoiceItem key={`choice-card-${digit}`} block={pbk(blocks, `choice_card${digit}`)} icon={choiceIcons[digit - 1]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type ChoiceItemProps = {
    block: CmsBlock;
    icon: React.ReactNode;
};

function ChoiceItem({ block, icon }: ChoiceItemProps) {
    return (
        <div className="shadow-choice-item flex flex-col items-center rounded-sm px-4 pt-7.5 pb-5.5 text-center sm:px-22 sm:pb-13 xl:px-16">
            <span className="text-icon-violet block">{icon}</span>
            <p className="mt-2 mb-4 text-lg font-bold sm:mt-5 sm:mb-10">{block.text}</p>
            <p className="text-sm text-gray-500">{block.content}</p>
        </div>
    );
}


const choiceIcons = [
    <ClockIcon className="size-6" />,
    <StarIcon className="size-6" />,
    <CheckBadgeIcon className="size-6" />,
    <LifebuoyIcon className="size-6" />,
];
