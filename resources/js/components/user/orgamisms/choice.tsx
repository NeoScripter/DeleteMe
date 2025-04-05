import ChoiceImg from '@/assets/images/choice/choice.webp';
import { CheckBadgeIcon, ClockIcon, LifebuoyIcon, StarIcon } from '@heroicons/react/24/solid';
import { v4 as uuidv4 } from 'uuid';

export default function Choice() {
    return (
        <section className="text-primary-text px-6 pt-12.5 pb-18 sm:px-17 sm:pt-35.5 sm:pb-23.5 xl:px-32 xl:pt-0 xl:pb-22">
            <div className="relative mx-auto max-w-76.75 sm:max-w-164 xl:max-w-full">
                <div className="bg-marquee-bg absolute -top-70 right-0 left-0 z-10 overflow-clip px-6 pt-8 text-center text-balance sm:-top-72 sm:px-10.5 sm:pt-12 xl:-top-50 xl:flex xl:items-center xl:gap-14 xl:pt-0 xl:pr-30 xl:text-left">
                    <div className="mb-4 xl:order-1">
                        <p className="mb-5 text-[2rem] font-bold sm:text-4xl xl:mb-7">Узнайте свой цифровой след</p>
                        <p>
                            Когда вы введете свое имя, город и дату рождения в поисковую систему, вы удивитесь, сколько вашей личной информации
                            находится в общем доступе!
                        </p>
                    </div>
                    <img
                        src={ChoiceImg}
                        alt="Поисковое окно Яндекс поиска"
                        className="mx-auto object-contain object-bottom xl:mx-0 xl:w-132 xl:shrink-0"
                    />
                </div>
            </div>

            <div className="pt-70 sm:pt-100 xl:pt-65">
                <h3 className="mb-15 text-center text-[2rem] font-bold sm:text-4xl xl:mb-9 xl:text-5xl">Почему DeleteMe?</h3>

                <div className='grid gap-8 mx-auto max-w-145 xl:grid-cols-2 xl:max-w-full xl:gap-6'>
                    {choiceItems.map(item => (
                        <ChoiceItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ChoiceItem({icon, title, description}: Omit<ChoiceItemType, 'id'>) {
    return (
        <div className='shadow-choice-item rounded-sm flex flex-col items-center pt-7.5 px-4 pb-5.5 sm:pb-13 sm:px-22 xl:px-16 text-center'>
            <span className='text-icon-violet block'>{icon}</span>
            <p className='mt-2 mb-4 font-bold text-lg sm:mt-5 sm:mb-10'>{title}</p>
            <p className='text-sm text-gray-500'>{description}</p>
        </div>
    )
}

type ChoiceItemType = {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
};

const choiceItems: ChoiceItemType[] = [
    {
        id: uuidv4(),
        icon: <ClockIcon className="size-6" />,
        title: 'Мы сэкономили нашим пользователям более 20 000 часов усилий.',
        description: 'или более 54 лет усилий для удаления персональных данных вручную из онлайн-источников.',
    },
    {
        id: uuidv4(),
        icon: <StarIcon className="size-6" />,
        title: 'Cредний рейтинг сервиса 4,7 из 5.',
        description:
            'Более 400+ отзывов и и отличные оценки говорят о том, что вы можете доверять нам, как лидеру отрасли в удалении персональных данных онлайн.',
    },
    {
        id: uuidv4(),
        icon: <CheckBadgeIcon className="size-6" />,
        title: 'Срвис удаления персональных данных №1 в России',
        description: 'Мы разработали самый полный, тщательный и прозрачный продукт для удаления информации на рынке.',
    },
    {
        id: uuidv4(),
        icon: <LifebuoyIcon className="size-6" />,
        title: 'Всегда готовы помочь',
        description: 'Мы гордимся нашим сервисом и даем 100% гарантию результата. Ваша конфиденциальность — это наша работа.',
    },
];
