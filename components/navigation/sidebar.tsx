"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarSearch } from "@/components/navigation/sidebar-search";
import { useSpotify } from "@/components/providers/spotify-provider";
import { usePlayer } from "@/hooks/usePlayer";

interface SidebarProps {
    className?: string;
    token?: string;
}

export const Sidebar = ({ className, token }: SidebarProps) => {

    const router = useRouter();

    const { setToken } = useSpotify();
    const {track} = usePlayer()

    useEffect(() => {
        if (token) {
            setToken(token);
        };
    }, []);

    const onClick = () => {
        router.push('/');
    };

    return (
        <div className={cn(
            "flex-col bg-white shadow-2xl border border-slate-100 dark:border-none dark:bg-neutral-900 w-1/5 rounded-md p-2 sticky top-0 md:h-screen h-full overflow-y-auto cursor-pointer",
            className,
        )}>

            <div
                onClick={onClick}
                className="bg-neutral-100 dark:bg-neutral-800 shadow-lg flex items-center justify-center py-2 rounded-md font-bold text-xl"
            >
                Harmony Sage
            </div>

            <div className="mt-4">
                <SidebarSearch />
            </div>

            <div className="mt-2">
                <p className="items-center justify-center flex pt-4 pb-0 font-semibold">
                    Playlist Section
                </p>
            </div>
        </div>
    );
};