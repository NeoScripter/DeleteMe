import Hero from '@/components/user/orgamisms/hero';
import UserLayout from '@/layouts/user-layout';

export default function Home() {
    return (
        <UserLayout title="Home">
            <main>
                <Hero />
            </main>
        </UserLayout>
    );
}


