import Accordion from '@/components/user/orgamisms/accordion';
import Brokers from '@/components/user/orgamisms/brokers';
import Chart from '@/components/user/orgamisms/chart';
import Choice from '@/components/user/orgamisms/choice';
import Footprint from '@/components/user/orgamisms/footprint';
import Hero from '@/components/user/orgamisms/hero';
import Marquee from '@/components/user/orgamisms/marquee';
import Perks from '@/components/user/orgamisms/perks';
import Popup from '@/components/user/orgamisms/popup';
import Pricing from '@/components/user/orgamisms/pricing';
import Reviews from '@/components/user/orgamisms/reviews';
import Stats from '@/components/user/orgamisms/stats';
import Webform from '@/components/user/orgamisms/webform';
import UserLayout from '@/layouts/user-layout';
import { PopupProvider } from '@/lib/providers/popup-provider';
import { BlockType } from '@/lib/types/cmsBlock';

type HomeProps = {
    blocks: BlockType;
};

export default function Home({ blocks }: HomeProps) {
    return (
        <UserLayout title="Home">
            <PopupProvider>
                <main>
                    <Hero blocks={blocks} />

                    <Marquee blocks={blocks} />

                    <Perks blocks={blocks} />

                    <div className="bg-primary-bg rounded-2xl px-5 pt-12 pb-63 text-white sm:pt-17 sm:pb-37 xl:px-29 xl:pb-71">
                        <Reviews />

                        <Stats />

                        <Chart />

                        <Footprint />
                    </div>

                    <Choice />

                    <Brokers />

                    <Pricing />

                    <Webform />

                    <Accordion />
                </main>
                <Popup />
            </PopupProvider>
        </UserLayout>
    );
}
