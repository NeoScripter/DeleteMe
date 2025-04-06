import ReviewCard from '@/assets/images/reviews/review-card.webp';
import ReviewTop from '@/assets/images/reviews/review-top.webp';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CARDWIDTHS = {
    SMALL: 294 + 13,
    MEDIUM: 374 + 22,
    LARGE: 230 + 31,
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

export default function Reviews() {
    return (
        <section id='reviews' className="mb-10 sm:mb-25 xl:mb-20">
            <header className="mb-7 sm:mb-15 xl:mb-18 xl:flex xl:items-center xl:justify-between">
                <h1 className="text-[2rem]">
                    Отзывы клиентов <br /> DeleteMe
                </h1>

                <div className="hidden xl:flex items-center gap-2">
                    <div>Отлично</div>
                    <img src={ReviewTop} alt="Фото общего рейтинга" className='shrink-0 w-40' />
                    <strong>4,78</strong>
                </div>
            </header>

            <ReviewCarousel />
        </section>
    );
}

type ReviewCarouselProps = {
    arrows?: boolean;
};

function ReviewCarousel({ arrows = false }: ReviewCarouselProps) {
    const [state, dispatch] = useReducer(reducer, {
        currentSlide: 0,
        touchStartX: null,
    });

    const totalSlides = reviews.length;

    return (
        <div
            onTouchStart={(e) => dispatch({ type: 'TOUCH_START', payload: e.touches[0].clientX })}
            onTouchEnd={(e) =>
                dispatch({
                    type: 'TOUCH_END',
                    payload: e.changedTouches[0].clientX,
                })
            }
            className="relative -mx-5 overflow-x-clip xl:-mx-29"
        >
            <div
                className="flex gap-[13px] transition-transform duration-500 ease-in-out sm:gap-[22px] xl:gap-[31px]"
                style={{
                    transform: `translateX(-${getOffset() * state.currentSlide}px)`,
                }}
            >
                {reviews.map((review: ReviewType) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>

            {arrows && (
                <div className="pointer-events-none absolute top-1/2 right-0 left-0 flex -translate-y-1/2 items-center justify-between px-3 sm:px-10 md:px-30">
                    <SliderBtn onClick={() => dispatch({ type: 'DECREMENT', payload: totalSlides })}>
                        <ArrowDownIcon className="rotate-90" />
                    </SliderBtn>
                    <SliderBtn onClick={() => dispatch({ type: 'INCREMENT', payload: totalSlides })}>
                        <ArrowDownIcon className="rotate-270" />
                    </SliderBtn>
                </div>
            )}
        </div>
    );
}

type SliderBtnProps = {
    children: React.ReactNode;
    onClick: () => void;
};

function SliderBtn({ children, onClick }: SliderBtnProps) {
    return (
        <button
            onClick={onClick}
            className="bg-gray-10 shadow-carousel-btn pointer-events-auto aspect-square size-9 cursor-pointer rounded-full p-1 backdrop-blur-sm sm:size-15 sm:p-2 sm:text-xl md:size-29 md:p-4 md:text-3xl"
        >
            {children}
        </button>
    );
}

type ReviewProps = {
    review: ReviewType;
};

function Review({ review }: ReviewProps) {
    return (
        <div className="w-[294px] shrink-0 rounded-2xl border border-white/10 bg-white/7 p-4 px-5 py-9 sm:w-[374px] sm:px-7.5 xl:w-[230px]">
            <div className="mb-6 w-23">
                <img src={ReviewCard} alt="Пять звезд рейтинга" />
            </div>
            <div className="mb-5 text-2xl font-bold">{review.title}</div>
            <div className="mb-5 sm:mb-6.5">{review.content.length > 100 ? review.content.slice(0, 100) + '...' : review.content}</div>
            <div className="font-bold">{review.author}</div>
        </div>
    );
}

type ReviewType = {
    id: string;
    rating: number;
    title: string;
    content: string;
    author: string;
};

const reviews: ReviewType[] = [
    {
        id: uuidv4(),
        rating: 5,
        title: 'Супер',
        content: 'Этот сервис убрал мои данные с сайтов, о которых я даже не знал!',
        author: 'Алекс, инженер',
    },
    {
        id: uuidv4(),
        rating: 5,
        title: 'Испытала облегчение',
        content: 'Наконец-то почувствовала контроль над своей цифровой жизнью',
        author: 'Мария, юрист',
    },
    {
        id: uuidv4(),
        rating: 5,
        title: 'Спасибо за отличный сервис!',
        content:
            'Моя личная информация была удалена с более чем 30 сайтов отслеживания, о некоторых из которых я даже не слышал. Как человек, ранее пострадавший от кражи личных данных, я благодарен DeleteMe за помощь в обеспечении моей онлайн и личной безопасности.',
        author: 'Михаил, предприниматель',
    },
    {
        id: uuidv4(),
        rating: 5,
        title: 'Доволен на все 100%',
        content:
            'решение для удаления публичных данных. Автоматическая, не требующая вмешательства программа с автообновлениями от компании о ходе работы.',
        author: 'Леонид, адвокат',
    },
    {
        id: uuidv4(),
        rating: 5,
        title: 'Очень нужный сервис!',
        content: 'DeleteMe усердно работает над удалением данных, и все проходит гладко и стабильно.',
        author: 'Николай, директор строительной фирмы',
    },
    {
        id: uuidv4(),
        rating: 5,
        title: 'Пока все хорошо',
        content: 'Хороший опыт. Заметила, что сатло значительно меньше спама.',
        author: 'Елена, мастер маникюра',
    },
];
