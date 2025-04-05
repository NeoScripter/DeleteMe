import Accordion from '@/components/user/orgamisms/accordion';
import Brokers from '@/components/user/orgamisms/brokers';
import Chart from '@/components/user/orgamisms/chart';
import Choice from '@/components/user/orgamisms/choice';
import Footprint from '@/components/user/orgamisms/footprint';
import Hero from '@/components/user/orgamisms/hero';
import Perks from '@/components/user/orgamisms/perks';
import Reviews from '@/components/user/orgamisms/reviews';
import Stats from '@/components/user/orgamisms/stats';
import UserLayout from '@/layouts/user-layout';

export default function Home() {
    return (
        <UserLayout title="Home">
            <main>
                <Hero />

                {/* <Marquee /> */}

                <Perks />

                <div className="bg-primary-bg rounded-2xl px-5 pt-12 text-white sm:pt-17 xl:px-29 pb-63 sm:pb-37 xl:pb-71">
                    <Reviews />

                    <Stats />

                    <Chart />

                    <Footprint />
                </div>

                <Choice />

                <Brokers />

                <Accordion />
            </main>
        </UserLayout>
    );
}
