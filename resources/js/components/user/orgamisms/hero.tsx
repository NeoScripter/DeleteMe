import HeroDesktop from '@/assets/images/hero/hero-dk.webp';
import HeroMobile from '@/assets/images/hero/hero-mb.webp';
import HeroTablet from '@/assets/images/hero/hero-tablet.webp';
import { useScreenResize } from '@/lib/hooks/use-screen-resize';
import { cn } from '@/lib/utils/cn';
import PrimaryBtn from '../atoms/primary-btn';
import SecondaryBtn from '../atoms/secondary-btn';
import HeroNav from '../molecules/hero-nav';

export default function Hero() {
    const isTablet = useScreenResize(540);
    const isDesktop = useScreenResize(900);

    return (
        <section
            style={{ backgroundImage: `url(${isTablet ? (isDesktop ? HeroDesktop : HeroTablet) : HeroMobile})` }}
            className={cn('bg-cover bg-no-repeat px-8 pt-10 pb-8 text-white md:px-16 xl:px-30 xl:pt-13.25', isTablet ? 'bg-right' : 'bg-center')}
        >
            <header className="mb-26 text-xl font-bold md:mb-18 xl:mb-21 xl:flex xl:items-center xl:gap-8">
                <div>DeleteMe</div>

                <HeroNav />
            </header>

            <div className="mb-10 w-74 md:w-106">
                <h1 className="mb-5 text-4xl font-bold text-balance md:mb-6 xl:text-5xl leading-tight">Ваши личные данные снова принадлежат вам </h1>
                <p className="text-sm md:text-base">DeleteMe помогает быстро, легко и безопасно удалить ваши пресональные данные из интернета</p>
            </div>

            <div className="mb-25 md:mb-17 xl:mb-18 md:flex md:items-center md:gap-6 xl:gap-4">
                <PrimaryBtn className="mb-3 md:mb-0">Защитить себя</PrimaryBtn>
                <SecondaryBtn>Защитить бизнес</SecondaryBtn>
            </div>

            <div className="border-t border-white/50 pt-7">
                <p className="text-center font-bold text-balance xl:text-xl">DeleteMe - сервис №1 в России по удалению персональных данных</p>
            </div>
        </section>
    );
}
