import { BlockType } from '@/lib/types/cmsBlock';
import { cbk } from '@/lib/utils/pick-block';
import { CircleCheck } from 'lucide-react';
import RequestForm from '../molecules/request-form';

type WebformProps = {
    blocks: BlockType;
};

export default function Webform({ blocks }: WebformProps) {
    return (
        <section id="form" className="mx-auto flex max-w-172 flex-col gap-10 px-3 text-white sm:gap-10.5 sm:px-11 xl:max-w-full xl:flex-row xl:px-30">
            <div className="bg-primary-bg space-y-6 rounded-4xl px-6 py-9 sm:px-16 xl:px-12">
                <p className="text-xl font-bold">Оставьте свои контактные данные и наш менеджер свяжется с вами</p>

                <RequestForm />
            </div>

            <div className="bg-primary-bg space-y-6 rounded-4xl px-8 py-10 sm:px-11">
                {cbk(blocks, 'pricing', 'text') && <p className="text-3xl font-bold">{blocks.pricing.text}</p>}

                <ul className="space-y-6">
                    {cbk(blocks, 'pricing', 'contents') &&
                        blocks?.pricing?.contents?.map((item, index) => <ListItem key={`plan-item-${index}`} content={item} />)}
                </ul>
            </div>
        </section>
    );
}

type ListItemProps = {
    content: string;
};

function ListItem({ content }: ListItemProps) {
    return (
        <li className="flex items-start gap-4">
            <CircleCheck className="text-icon-violet mt-1 size-5 shrink-0" />
            <p className="opacity-70">{content}</p>
        </li>
    );
}
