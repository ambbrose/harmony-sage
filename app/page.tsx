import { HomeNav } from "@/components/navigation/home-nav";
import { currentProfile } from "@/lib/current-profile";

export default async function Home() {

    const profile = await currentProfile();

    return (
        <div
            style={{ backgroundImage: 'url(/bg4.jpg)' }}
            className="container min-h-screen bg-center bg-cover bg-no-repeat"
        >
            <HomeNav profile={profile} />

            <div className=""></div>
        </div>
    );
};