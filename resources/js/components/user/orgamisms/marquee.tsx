import { BreakpointConfig, useCarousel } from '@/lib/hooks/use-carousel';
import { BlockType } from '@/lib/types/cmsBlock';
import { cn } from '@/lib/utils/cn';
import { getAlt } from '@/lib/utils/get-alt';
import { cbk } from '@/lib/utils/pick-block';
import { useEffect } from 'react';

const breakpoints: BreakpointConfig[] = [
    { screen: 640, values: { slide: 108, gap: 80 } },
    { screen: 1280, values: { slide: 143, gap: 130 } },
    { screen: Infinity, values: { slide: 198, gap: 130 } },
];

type MarqueeProps = {
    blocks: BlockType;
};

export default function Marquee({ blocks }: MarqueeProps) {

    const images = cbk(blocks, 'marquee_images', 'images') ? blocks.marquee_images.images : [];
    const alts = cbk(blocks, 'marquee_images', 'contents') ? blocks.marquee_images.contents : [];

    const {
        slides: carouselSlides,
        offsetPx,
        handleTouchStart,
        handleTouchEnd,
        handleIncrement,
        shouldAnimate,
        animationDuration,
    } = useCarousel({
        slides: [...images, ...images],
        offset: 3,
        animationDuration: 1500,
        breakpoints: breakpoints,
    });

     useEffect(() => {
        const interval = setInterval(() => {
            handleIncrement();
        }, 2500);

        return () => clearInterval(interval);
    }, [handleIncrement]);

    return (
        <section className="bg-marquee-bg py-3 sm:py-4 xl:py-5.5">
            <div className="h-12 sm:h-16 xl:h-22">
                <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="relative overflow-x-clip">
                    <div
                        className={cn('flex items-center gap-[80px] px-5 sm:gap-[130px]', shouldAnimate && 'transition-transform ease-in-out')}
                        style={{
                            transform: `translateX(-${offsetPx}px)`,
                            transitionDuration: shouldAnimate ? `${animationDuration}ms` : '0ms',
                        }}
                    >
                        {carouselSlides.map((image, index) => (
                            <CarouselItem key={`${image.id}marquee${index}`} imgUrl={`/storage/${image.path}`} imgText={getAlt(alts, index, carouselSlides)} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

type CarouselItemProps = {
    imgUrl: string;
    imgText: string;
};

function CarouselItem({ imgUrl, imgText }: CarouselItemProps) {
    return (
        <div className="flex w-[108px] shrink-0 items-center justify-center sm:w-[143px] xl:w-[198px]">
            <img src={imgUrl} alt={imgText} className="h-4/5 w-full object-contain object-center sm:h-3/5" />
        </div>
    );
}

