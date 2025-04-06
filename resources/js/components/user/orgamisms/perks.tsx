import card1 from '@/assets/images/perks/card-1.webp';
import card2 from '@/assets/images/perks/card-2.webp';
import card3 from '@/assets/images/perks/card-3.webp';
import card4 from '@/assets/images/perks/card-4.webp';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { v4 as uuidv4 } from 'uuid';
import PrimaryBtn from '../atoms/primary-btn';

type PerkCard = {
    id?: string,
    image: string,
    title: string,
    description: string,
}

const cards: PerkCard[] = [
    {
        id: uuidv4(),
        image: card1,
        title: 'Вы загружаете данные',
        description: 'Предоставьте вашу личную информацию для удаления из поисковых систем и сайтов брокеров данных.',
    },
    {
        id: uuidv4(),
        image: card2,
        title: 'Наши эксперты проводят полный поиск ',
        description: 'Специалисты DeleteMe проверяют десятки сайтов, на которых может быть ваша личная информация',
    },
    {
        id: uuidv4(),
        image: card3,
        title: 'Начинаем процесс удаления',
        description: 'Отправим вам детальный отчет обо всех удаленных данных в течение 7 дней. Посмотрите пример отчета.',
    },
    {
        id: uuidv4(),
        image: card4,
        title: 'Сканируем и удаляем регулярно весь год',
        description: 'Отслеживаем повторные появления вашей информации и удаляем её снова в течение года.',
    },
];

export default function Perks() {
    return (
        <section id="perks" className="p-5.5 pb-9 sm:px-24 sm:py-18 sm:pb-19 xl:px-31 xl:pt-17 xl:pb-23 xl:flex xl:items-start xl:justify-between">
            <div className="flex flex-col items-center gap-5 sm:gap-3 text-center mb-15 sm:mb-35 xl:mb-0 xl:items-start xl:text-left">
                <h2 className="text-[2rem] font-bold xl:w-90 xl:text-4xl">Как работает DeleteMe?</h2>
                <p className="text-lg sm:mb-4 xl:w-90">Никаких лишних шагов — только плавный и понятный процесс.</p>
                <PrimaryBtn className="flex items-center gap-2 xl:ml-auto">
                    Начать удаление
                    <ArrowLongRightIcon className="size-6" />
                </PrimaryBtn>
            </div>

            <div className='w-80 sm:w-133.5 xl:w-114 mx-auto xl:mx-0 space-y-10 sm:space-y-15'>
                {cards.map(card => (
                    <PerkCard key={card.id} title={card.title} description={card.description} image={card.image} />
                ))}
            </div>
        </section>
    );
}

function PerkCard({ title, image, description }: PerkCard) {
    return (
        <div className='flex flex-col items-center gap-5 text-center text-balance'>
            <div className='w-37.5 sm:w-65 xl:w-54 sm:mb-5'>
                <img src={image} alt={title} />
            </div>
            <p className='font-bold text-2xl sm:text-[2rem]'>{title}</p>
            <p className=''>{description}</p>
        </div>
    )
}
