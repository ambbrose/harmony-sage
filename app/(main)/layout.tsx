import { redirect } from "next/navigation";
import { redirectToSignIn, currentUser } from "@clerk/nextjs";

import { getSpotifyToken } from "@/lib/auth_spotify";
import { Sidebar } from "@/components/navigation/sidebar";
import TopNavbar from "@/components/navigation/top-nav-bar";
import { currentProfile } from "@/lib/current-profile";
import { createInitialProfile } from "@/lib/create-initial-profile";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {

    const profile = await currentProfile();
    const user = await currentUser();
    const token = await getSpotifyToken();

    if (!token) {
        return redirect('/');
    };

    if (!profile && user) {
        await createInitialProfile();
    };

    if (!profile && !user) {
        return redirectToSignIn();
    };


    return (
        <div className="bg-white dark:bg-black w-full gap-4 p-3 flex text-neutral-700 dark:text-white">
            <Sidebar token={token} className="hidden md:flex" />

            <main className="flex flex-col flex-1">
                <TopNavbar />

                <div className="bg-neutral-100 dark:bg-neutral-900 dark:text-white shadow-sm w-full flex-grow rounded-md mt-2">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;