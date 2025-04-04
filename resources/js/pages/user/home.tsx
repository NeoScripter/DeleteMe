import Hero from '@/components/user/orgamisms/hero';
import Marquee from '@/components/user/orgamisms/marquee';
import UserLayout from '@/layouts/user-layout';

export default function Home() {
    return (
        <UserLayout title="Home">
            <main>
                <Hero />

                <Marquee />
            </main>
        </UserLayout>
    );
}


