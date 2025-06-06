import { BlockType } from '@/lib/types/cmsBlock';
import { cbk } from '@/lib/utils/pick-block';
import {
    BriefcaseIcon,
    CameraIcon,
    ClockIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    HomeIcon,
    LinkIcon,
    MapPinIcon,
    PhoneIcon,
    UserIcon,
    UserPlusIcon,
} from '@heroicons/react/24/solid';
import { Compass } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

type FootprintProps = {
    blocks: BlockType;
};

export default function Footprint({ blocks }: FootprintProps) {
    const image = cbk(blocks, 'footprint', 'image') && `/storage/${blocks.footprint.image}`;

    return (
        <section className="flex flex-col items-center gap-6 sm:gap-0 xl:flex-row xl:gap-0">
            <div className="sm:px-20 xl:px-0">
                {cbk(blocks, 'footprint', 'text') && (
                    <h3 className="mb-7 text-[1.75rem] font-bold text-balance sm:mb-13 sm:text-center sm:text-[2.5rem] xl:mb-11 xl:text-left">
                        {blocks.footprint.text}
                    </h3>
                )}

                <ul className="flex flex-wrap gap-x-2.5 gap-y-4 sm:gap-x-3 sm:gap-y-5">
                    {listItems.map((item) => (
                        <FootprintListItem key={item.id} icon={item.icon} text={item.text} />
                    ))}
                </ul>
            </div>

            <div className="w-full xl:w-201.5 xl:shrink-0">
                <img src={image || ''} alt="Мужчина в синем костюме в наушнике с заблёренным лицом" className="w-full" />
            </div>
        </section>
    );
}

type FootprintListItemProps = {
    icon: React.ReactNode;
    text: string;
};

function FootprintListItem({ icon, text }: FootprintListItemProps) {
    return (
        <li className="text-icon-violet inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/7 p-3">
            {icon}
            <span className="text-white">{text}</span>
        </li>
    );
}

const ICONSIZE = 'size-5';

const listItems = [
    {
        id: uuidv4(),
        icon: <UserIcon className={ICONSIZE} />,
        text: 'Имя',
    },
    {
        id: uuidv4(),
        icon: <ClockIcon className={ICONSIZE} />,
        text: 'Возраст',
    },
    {
        id: uuidv4(),
        icon: <MapPinIcon className={ICONSIZE} />,
        text: 'Прописка',
    },
    {
        id: uuidv4(),
        icon: <PhoneIcon className={ICONSIZE} />,
        text: 'Телефон',
    },
    {
        id: uuidv4(),
        icon: <UserPlusIcon className={ICONSIZE} />,
        text: 'Родственники',
    },
    {
        id: uuidv4(),
        icon: <GlobeAltIcon className={ICONSIZE} />,
        text: 'Соцсети',
    },
    {
        id: uuidv4(),
        icon: <BriefcaseIcon className={ICONSIZE} />,
        text: 'Профессия',
    },
    {
        id: uuidv4(),
        icon: <HomeIcon className={ICONSIZE} />,
        text: 'Недвижимость',
    },
    {
        id: uuidv4(),
        icon: <Compass className={ICONSIZE} />,
        text: 'Адреса',
    },
    {
        id: uuidv4(),
        icon: <CameraIcon className={ICONSIZE} />,
        text: 'Фотографии',
    },

    {
        id: uuidv4(),
        icon: <LinkIcon className={ICONSIZE} />,
        text: 'Семейное положение',
    },
    {
        id: uuidv4(),
        icon: <EnvelopeIcon className={ICONSIZE} />,
        text: 'Email',
    },
];
