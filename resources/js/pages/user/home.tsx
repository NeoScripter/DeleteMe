import Chart from '@/components/user/orgamisms/chart';
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

                <div className="bg-primary-bg rounded-2xl px-5 pt-12 text-white sm:pt-17 xl:px-29">
                    <Reviews />

                    <Stats />

                    <Chart />
                </div>
            </main>
        </UserLayout>
    );
}
