import { cardDetails } from "@/lib/constants/cardDetails";

export default function Marquee() {
    return (
        <section className="bg-marquee-bg py-3 sm:py-4 xl:py-5.5">

            <div className="h-12 sm:h-16 xl:h-22 overflow-x-clip relative">
                <div className="w-[300%] h-full absolute flex items-center justify-center left-0 gap-15 animate-slide">
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
      <div className="h-full w-full flex items-center justify-center">
        <img src={imgUrl} alt={imgTitle} className="object-contain h-4/5 sm:h-3/5 w-full"/>
      </div>
    );
  }
