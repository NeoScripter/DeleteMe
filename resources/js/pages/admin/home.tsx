import AddItemBtn from '@/components/admin/elements/add-item-btn';
import RemoveItemBtn from '@/components/admin/elements/remove-item-btn';
import AccordionWrapper from '@/components/admin/forms/accordion-wrapper';
import Gallery from '@/components/admin/pages/home/gallery';
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
import Question from '@/components/admin/pages/home/question';
import ReviewCard from '@/components/admin/pages/home/reviews/review-card';
import ReviewTitle from '@/components/admin/pages/home/reviews/review-title';
import AppLayout from '@/layouts/app-layout';
import { useBlockRangeCount } from '@/lib/hooks/use-block-range-count';
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
    const { value: reviewCount, increment: addReview, decrement: removeReview } = useBlockRangeCount('review', blocks);

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
                                <div key={`review-card${digit}`} className="flex items-start gap-2">
                                    <div className="flex-1">
                                        <ReviewCard label={`Отзыв ${digit}`} block={pbk(blocks, `review_card${digit}`)} slug={`review_card${digit}`} />
                                    </div>
                                    <RemoveItemBtn onClick={removeReview} className="mt-2" />
                                </div>
                            ))}
                            <AddItemBtn className="mt-2 mb-4" content="Добавить отзыв" onClick={addReview} />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Цвет карточек на странице</h2>
                        <AccordionWrapper>
                            <Question label="Вопрос" block={pbk(blocks, 'question')} slug="question" />
                        </AccordionWrapper>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className="p-2 text-lg font-bold">Галерея фотографий</h2>
                        <AccordionWrapper>
                            <Gallery label="Фотографии" block={pbk(blocks, 'gallery')} slug="gallery" />
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
