import { cardDetails } from '@/lib/constants/cardDetails';
import { useEffect, useReducer } from 'react';

export default function Marquee() {
    return (
        <section className="bg-marquee-bg py-3 sm:py-4 xl:py-5.5">
            <div className="h-12 overflow-x-clip sm:h-16 xl:h-22">
                {/* <div className=" h-full absolute flex items-center justify-center left-0 gap-15">
                    {cardDetails.map((detailKey, index) => {
                        return <CarouselItem key={`${index}track`} imgUrl={detailKey.imgUrl} imgTitle={detailKey.title}></CarouselItem>;
                    })}
                </div> */}
                <ReviewCarousel />
            </div>
        </section>
    );
}

type CarouselItemProps = {
    imgUrl: string;
    imgTitle: string;
};

function CarouselItem({ imgUrl, imgTitle }: CarouselItemProps) {
    return (
        <div className="flex w-[108px] shrink-0 items-center justify-center sm:w-[143px] xl:w-[198px]">
            <img src={imgUrl} alt={imgTitle} className="h-4/5 w-full object-contain object-center sm:h-3/5" />
        </div>
    );
}

const CARDWIDTHS = {
    SMALL: 108 + 80,
    MEDIUM: 143 + 130,
    LARGE: 198 + 130,
};

const getOffset = () => {
    if (screen.width < 640) return CARDWIDTHS.SMALL;
    if (screen.width < 1280) return CARDWIDTHS.MEDIUM;
    return CARDWIDTHS.LARGE;
};

const getEdgeSlide = (totalSlides: number) => {
    const offset = getOffset();
    const maxSlidesOnPage = Math.floor(screen.width / offset);
    return totalSlides - maxSlidesOnPage;
};

type CarouselState = {
    currentSlide: number;
    touchStartX: number | null;
};

type Action =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'TOUCH_START'; payload: number }
    | { type: 'TOUCH_END'; payload: number }
    | { type: 'RESET_TOUCH' };

const reducer = (state: CarouselState, action: Action): CarouselState => {
    switch (action.type) {
        case 'INCREMENT': {
            const edge = getEdgeSlide(action.payload);
            return {
                ...state,
                currentSlide: state.currentSlide < edge ? state.currentSlide + 1 : 0,
            };
        }
        case 'DECREMENT': {
            const edge = getEdgeSlide(action.payload);
            return {
                ...state,
                currentSlide: state.currentSlide > 0 ? state.currentSlide - 1 : edge,
            };
        }
        case 'TOUCH_START':
            return { ...state, touchStartX: action.payload };
        case 'TOUCH_END': {
            const swipeThreshold = 50;
            const diffX = (state.touchStartX ?? 0) - action.payload;
            const edge = getEdgeSlide(action.payload);

            if (Math.abs(diffX) > swipeThreshold) {
                return diffX > 0
                    ? {
                          ...state,
                          currentSlide: state.currentSlide < edge ? state.currentSlide + 1 : 0,
                          touchStartX: null,
                      }
                    : {
                          ...state,
                          currentSlide: state.currentSlide > 0 ? state.currentSlide - 1 : edge,
                          touchStartX: null,
                      };
            }

            return { ...state, touchStartX: null };
        }
        case 'RESET_TOUCH':
            return { ...state, touchStartX: null };
        default:
            return state;
    }
};

function ReviewCarousel() {
    const [state, dispatch] = useReducer(reducer, {
        currentSlide: 0,
        touchStartX: null,
    });

    const totalSlides = cardDetails.length * 2;

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: 'INCREMENT', payload: totalSlides });
        }, 2500);

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div
            onTouchStart={(e) => dispatch({ type: 'TOUCH_START', payload: e.touches[0].clientX })}
            onTouchEnd={(e) =>
                dispatch({
                    type: 'TOUCH_END',
                    payload: e.changedTouches[0].clientX,
                })
            }
            className="relative overflow-x-clip"
        >
            <div
                className="flex gap-[80px] transition-transform duration-1500 ease-in-out sm:gap-[130px] px-5"
                style={{
                    transform: `translateX(-${getOffset() * state.currentSlide}px)`,
                }}
            >
                {cardDetails.map((card, index) => (
                    <CarouselItem key={`${index}track`} imgUrl={card.imgUrl} imgTitle={card.title} />
                ))}

                {cardDetails.map((card, index) => (
                    <CarouselItem key={`${index}copy`} imgUrl={card.imgUrl} imgTitle={card.title} />
                ))}
            </div>

        </div>
    );
}
