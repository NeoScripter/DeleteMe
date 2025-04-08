import AddItemBtn from '@/components/admin/elements/add-item-btn';
import RemoveItemBtn from '@/components/admin/elements/remove-item-btn';
import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import BrokersData from '@/components/admin/pages/home/brokers-data';
import ChoiceSection from '@/components/admin/pages/home/choice/choice';
import ChoiceCard from '@/components/admin/pages/home/choice/choice-card';
import ChoiceTitle from '@/components/admin/pages/home/choice/choice-title';
import FootPrint from '@/components/admin/pages/home/footprint';
import Groceries from '@/components/admin/pages/home/groceries';
import HeroBottom from '@/components/admin/pages/home/hero/hero-bottom';
import HeroDektopImage from '@/components/admin/pages/home/hero/hero-desktop-img';
import HeroMobileImage from '@/components/admin/pages/home/hero/hero-mobile-img';
import HeroSubtitle from '@/components/admin/pages/home/hero/hero-subtitle';
import HeroTabletImage from '@/components/admin/pages/home/hero/hero-tablet-img';
import HeroTitle from '@/components/admin/pages/home/hero/hero-title';
import Marquee from '@/components/admin/pages/home/marquee';
import PerksCard from '@/components/admin/pages/home/perks/perks-card';
import PerksTitle from '@/components/admin/pages/home/perks/perks-title';
import ReviewCard from '@/components/admin/pages/home/reviews/review-card';
import ReviewTitle from '@/components/admin/pages/home/reviews/review-title';
import StatsCard from '@/components/admin/pages/home/stats/stats-card';
import StatsTitle from '@/components/admin/pages/home/stats/stats-title';
import AppLayout from '@/layouts/app-layout';
import { useBlockRange } from '@/lib/hooks/use-block-range';
import { type BreadcrumbItem } from '@/lib/types';
import { BlockType } from '@/lib/types/cmsBlock';
import { pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Главная страница',
        href: '/home',
    },
];

type PageProps = {
    blocks: BlockType;
};

export default function Home({ blocks }: PageProps) {
    const { value: reviewCount, increment: addReview, decrement: removeReview } = useBlockRange('review_card', blocks);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin" />
            <div className="max-w-4xl space-y-4 px-2 md:px-4">
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Баннер</h2>
                        <AccordionWrapper>
                            <HeroTitle label="Заголовок баннера" block={pbk(blocks, 'hero_title')} slug="hero_title" />
                            <HeroSubtitle label="Подзаголовок баннера" block={pbk(blocks, 'hero_subtitle')} slug="hero_subtitle" />
                            <HeroBottom label="Надпись внизу баннера" block={pbk(blocks, 'hero_bottom')} slug="hero_bottom" />
                            <HeroDektopImage label="Фото для крупных экранов" block={pbk(blocks, 'hero_desktop_image')} slug="hero_desktop_image" />
                            <HeroTabletImage label="Фото для планшетов" block={pbk(blocks, 'hero_tablet_image')} slug="hero_tablet_image" />
                            <HeroMobileImage label="Мобильное фото" block={pbk(blocks, 'hero_mobile_image')} slug="hero_mobile_image" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Логотипы партнеров</h2>
                        <AccordionWrapper>
                            <Marquee label="Логотипы партнеров" block={pbk(blocks, 'marquee_images')} slug="marquee_images" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Секция "Как это работает"</h2>
                        <AccordionWrapper>
                            <PerksTitle label="Втупительный текст" block={pbk(blocks, 'perks_title')} slug="perks_title" />
                            {range(1, 4).map((digit) => (
                                <PerksCard
                                    key={`perk-card${digit}`}
                                    label={`Карточка ${digit}`}
                                    block={pbk(blocks, `perk_card${digit}`)}
                                    slug={`perk_card${digit}`}
                                />
                            ))}
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Отзывы</h2>
                        <AccordionWrapper>
                            <ReviewTitle label="Заголовок" block={pbk(blocks, 'reviews_title')} slug="reviews_title" />

                            {range(1, reviewCount).map((digit) => (
                                <div key={`review-card${digit}`} className="flex items-start gap-4">
                                    <div className="flex-1">
                                        <ReviewCard label={`Отзыв ${digit}`} block={pbk(blocks, `review_card${digit}`)} slug={`review_card${digit}`} />
                                    </div>
                                    <RemoveItemBtn onClick={removeReview} className="mt-4" data={{ page_slug: "home", block_slug: `review_card${digit}` }} />
                                </div>
                            ))}
                            <AddItemBtn className="mt-2 mb-4" content="Добавить отзыв" onClick={addReview} />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Статистика</h2>
                        <AccordionWrapper>
                            {range(1, 3).map((digit) => (
                                <StatsCard
                                    key={`stats-card${digit}`}
                                    label={`Пункт ${digit}`}
                                    block={pbk(blocks, `stats_card${digit}`)}
                                    slug={`stats_card${digit}`}
                                />
                            ))}

                            <StatsTitle label="Текст справа от фото с брокерами" block={pbk(blocks, 'stats_title')} slug="stats_title" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Секция с типами удаляемых данных</h2>
                        <AccordionWrapper>
                            <FootPrint label="Фото и заголовок" block={pbk(blocks, 'footprint')} slug="footprint" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Почему мы?</h2>
                        <AccordionWrapper>
                            <ChoiceSection label="Заголовок и подзаголовок справа от фото с поиском в Яндексе" block={pbk(blocks, 'choice')} slug="choice" />

                            <ChoiceTitle label="Заголовок" block={pbk(blocks, 'choice_title')} slug="choice_title" />

                            {range(1, 4).map((digit) => (
                                <ChoiceCard
                                    key={`choice_card${digit}`}
                                    label={`Карточка ${digit}`}
                                    block={pbk(blocks, `choice_card${digit}`)}
                                    slug={`choice_card${digit}`}
                                />
                            ))}
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Секция с брокерами данных</h2>
                        <AccordionWrapper>
                            <BrokersData label="Заголовок и логотипы" block={pbk(blocks, 'brokers')} slug="brokers" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Список покупок</h2>
                        <AccordionWrapper>
                            <Groceries label="Покупки" block={pbk(blocks, 'groceries')} slug="groceries" />
                        </AccordionWrapper>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
