import Hero from '@/components/user/orgamisms/hero';
import Perks from '@/components/user/orgamisms/perks';
import UserLayout from '@/layouts/user-layout';

export default function Home() {
    return (
        <UserLayout title="Home">
            <main>
                <Hero />

                {/* <Marquee /> */}

                <Perks />
            </main>
        </UserLayout>
    );
}


