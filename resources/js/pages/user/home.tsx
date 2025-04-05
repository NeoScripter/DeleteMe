import Hero from '@/components/user/orgamisms/hero';
import Perks from '@/components/user/orgamisms/perks';
import Reviews from '@/components/user/orgamisms/reviews';
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

                    <div className="mb-10 sm:mb-21 xl:mb-14"></div>
                </div>
            </main>
        </UserLayout>
    );
}
