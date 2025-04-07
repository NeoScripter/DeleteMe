import { useScreenResize } from '@/lib/hooks/use-screen-resize';
import { cn } from '@/lib/utils/cn';
import PrimaryBtn from '../atoms/primary-btn';
import SecondaryBtn from '../atoms/secondary-btn';
import HeroNav from '../molecules/hero-nav';
import { BlockType } from '@/lib/types/cmsBlock';
import { cbk } from '@/lib/utils/pick-block';

type HeroProps = {
    blocks: BlockType;
};

export default function Hero({ blocks }: HeroProps) {
    const isTablet = useScreenResize(540);
    const isDesktop = useScreenResize(900);

    const mobileImage = cbk(blocks, 'hero_mobile_image', 'image') && blocks.hero_mobile_image.image;
    const tabletImage = cbk(blocks, 'hero_tablet_image', 'image') && blocks.hero_tablet_image.image;
    const desktopImage = cbk(blocks, 'hero_desktop_image', 'image') && blocks.hero_desktop_image.image;

    return (
        <section
            style={{ backgroundImage: `url(${isTablet ? (isDesktop ? desktopImage : tabletImage) : mobileImage})` }}
            className={cn('bg-cover bg-no-repeat px-8 pt-10 pb-8 text-white md:px-16 xl:px-30 xl:pt-13.25', isTablet ? 'bg-right' : 'bg-center')}
        >
            <header className="mb-26 text-xl font-bold md:mb-18 xl:mb-21 xl:flex xl:items-center xl:gap-8">
                <div>DeleteMe</div>

                <HeroNav />
            </header>

            <div className="mb-10 w-74 md:w-106">

                {cbk(blocks, 'hero_title', 'text') && <h1 className="mb-5 text-4xl font-bold text-balance md:mb-6 xl:text-5xl leading-tight">{blocks.hero_title.text}</h1>}

                {cbk(blocks, 'hero_subtitle', 'text') && <p className="text-sm md:text-base">{blocks.hero_subtitle.text}</p>}

            </div>

            <div className="mb-25 md:mb-17 xl:mb-18 md:flex md:items-center md:gap-6 xl:gap-4">
                <PrimaryBtn className="mb-3 md:mb-0">Защитить себя</PrimaryBtn>
                <SecondaryBtn>Защитить бизнес</SecondaryBtn>
            </div>

            <div className="border-t border-white/50 pt-7">
                {cbk(blocks, 'hero_bottom', 'text') && <p className="text-center font-bold text-balance xl:text-xl">{blocks.hero_bottom.text}</p>}
            </div>
        </section>
    );
}
