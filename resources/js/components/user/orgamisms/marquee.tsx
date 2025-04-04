import { cardDetails } from "@/lib/constants/cardDetails";
import '@/assets/styles/carousel.css';

/* import Marquee1 from '@/assets/images/marquee/marquee-1.webp';
import Marquee2 from '@/assets/images/marquee/marquee-2.webp';
import Marquee3 from '@/assets/images/marquee/marquee-3.webp';
import Marquee4 from '@/assets/images/marquee/marquee-4.webp';
import Marquee5 from '@/assets/images/marquee/marquee-5.webp';
import Marquee6 from '@/assets/images/marquee/marquee-6.webp';
 */
export default function Marquee() {
    return (
        <section className="bg-marquee-bg py-3 sm:py-4 xl:py-5.5 h-50">
            {/*  <div>
                <img src={Marquee1} alt="" className="h-full w-full object-contain" />
                <img src={Marquee2} alt="" className="h-full w-full object-contain" />
                <img src={Marquee3} alt="" className="h-full w-full object-contain" />
                <img src={Marquee4} alt="" className="h-full w-full object-contain" />
                <img src={Marquee5} alt="" className="h-full w-full object-contain" />
                <img src={Marquee6} alt="" className="h-full w-full object-contain" />
            </div> */}

            <div className="carousel-container">
                <div className="carousel-track">
                    {cardDetails.map((detailKey, index) => {
                        return <CarouselItem key={`${index}track`} imgUrl={detailKey.imgUrl} imgTitle={detailKey.title}></CarouselItem>;
                    })}
                    {cardDetails.map((detailKey, index) => {
                        return <CarouselItem key={`${index}copy`} imgUrl={detailKey.imgUrl} imgTitle={detailKey.title}></CarouselItem>;
                    })}
                </div>
            </div>
        </section>
    );
}

type CarouselItemProps = {
    imgUrl: string;
    imgTitle: string;
}

function CarouselItem({ imgUrl, imgTitle }: CarouselItemProps) {
    return (
      <div className="carousel-card">
        <img src={imgUrl} alt={imgTitle}></img>
      </div>
    );
  }
