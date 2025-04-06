import { cn } from '@/lib/utils/cn';
import { Button } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Accordion() {
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

    function handleClick(idx: number) {
        setOpenItemIndex((prev) => (prev == idx ? null : idx));
    }
    return (
        <section className="px-5 pt-14.5 pb-12 sm:px-15 sm:pt-16 sm:pb-15 xl:px-61.5 xl:pt-23">
            <h3 className="mb-10 text-[2rem] font-bold sm:mb-12 sm:text-[2.5rem]">Популярные вопросы</h3>

            <ul className="grid">
                {accordionItems.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        onClick={() => handleClick(index)}
                        isOpen={index === openItemIndex}
                    />
                ))}
            </ul>
        </section>
    );
}

type AccordionItemProps = {
    title: string;
    description: string;
    onClick: () => void;
    isOpen: boolean;
};

function AccordionItem({ title, description, onClick, isOpen }: AccordionItemProps) {
    return (
        <li className={cn('border-primary-text mb-4 flex items-start border-b sm:mb-7.5')}>
            <div className="basis-4/5">
                <p onClick={onClick} className="mb-4 cursor-pointer font-bold sm:mb-6 sm:text-lg">
                    {title}
                </p>

                <div className={cn('overflow-clip transition-all duration-500 linear', isOpen ? 'max-h-screen pb-4 sm:pb-7.5' : 'max-h-0')}>
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

type AccordionItemType = {
    id: string;
    title: string;
    description: string;
};

const accordionItems: AccordionItemType[] = [
    {
        id: uuidv4(),
        title: 'Что такое брокер базы данных?',
        description:
            'Брокеры данных — это компании, которые собирают огромное количество персонально идентифицируемой информации (PII) и объединяют её в так называемые «профили» или «записи» с вашими личными данными. Эти профили могут содержать такие сведения, как номер социального страхования, дата рождения, предыдущие и текущие адреса проживания и многое другое.',
    },
    {
        id: uuidv4(),
        title: 'Как найти утечку данных?',
        description:
            'Брокеры данных сканируют интернет в поисках информации и используют её для создания вашего персонального профиля. Они получают эти данные из государственных и других публичных реестров, информации, которую вы указывали самостоятельно, социальных сетей и от других брокеров данных.',
    },
    {
        id: uuidv4(),
        title: 'Что будет после подписки?',
        description:
            'После того как вы завершите регистрацию в DeleteMe, мы отправим вам приветственное письмо, чтобы вы могли сразу начать работу. Вы войдёте в личный кабинет и окажетесь на своей персональной странице DeleteMe. Там вы укажете, какую именно информацию хотите удалить, и наши эксперты по конфиденциальности займутся этим.',
    },
    {
        id: uuidv4(),
        title: 'Можно ли удалить яндекс или гугл поиск обо мне?',
        description:
            'Мы не можем удалить результаты поиска Google напрямую, не удалив сначала исходную информацию с сайтов брокеров данных, откуда эти результаты берутся. Google не является источником этих данных — он просто отображает информацию из наиболее релевантных источников в ответ на ваш поисковый запрос, делая её более доступной. У Google нет файла с вашей личной информацией, и он не может его удалить.',
    },
];
