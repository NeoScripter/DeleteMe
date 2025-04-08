import { useBlockRange } from '@/lib/hooks/use-block-range';
import { BlockType, CmsBlock } from '@/lib/types/cmsBlock';
import { cn } from '@/lib/utils/cn';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Button } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

type AccordionProps = {
    blocks: BlockType;
};

export default function Accordion({ blocks }: AccordionProps) {
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
    const { value: itemCount } = useBlockRange('accordion_item', blocks);

    function handleClick(idx: number) {
        setOpenItemIndex((prev) => (prev == idx ? null : idx));
    }
    return (
        <section className="px-5 pt-14.5 pb-12 sm:px-15 sm:pt-16 sm:pb-15 xl:px-61.5 xl:pt-23">
            {cbk(blocks, 'accordion_title', 'text') && (
                <h3 className="mb-10 text-[2rem] font-bold sm:mb-12 sm:text-[2.5rem]">{blocks.accordion_title.text}</h3>
            )}

            <ul className="grid">
                {range(1, itemCount).map((digit) => (
                    <AccordionItem key={`accordion_item-${digit}`} block={pbk(blocks, `accordion_item${digit}`)} onClick={() => handleClick(digit - 1)}  isOpen={digit - 1 === openItemIndex} />
                ))}
            </ul>
        </section>
    );
}

type AccordionItemProps = {
    block: CmsBlock;
    onClick: () => void;
    isOpen: boolean;
};

function AccordionItem({ block, onClick, isOpen }: AccordionItemProps) {
    const title = block?.text ?? '';
    const description = block?.content ?? '';

    return (
        <li className={cn('border-primary-text mb-4 flex items-start border-b sm:mb-7.5')}>
            <div className="basis-4/5">
                <p onClick={onClick} className="mb-4 cursor-pointer font-bold sm:mb-6 sm:text-lg">
                    {title}
                </p>

                <div className={cn('linear overflow-clip transition-all duration-500', isOpen ? 'max-h-screen pb-4 sm:pb-7.5' : 'max-h-0')}>
                    <div>{description}</div>
                </div>
            </div>
            <Button
                onClick={onClick}
                className="bg-primary-btn-bg mb-4 ml-auto flex aspect-square size-8.5 shrink-0 cursor-pointer items-center justify-center rounded-full text-white sm:mb-7.5"
            >
                {isOpen ? <MinusIcon className="size-5" /> : <PlusIcon className="size-5" />}
            </Button>
        </li>
    );
}
