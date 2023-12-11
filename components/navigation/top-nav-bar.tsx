"use client";

import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from '@/components/mode-toggle';
import { MobileSidebarToggle } from '@/components/navigation/mobile-sidebar-toggle';
import { ArrowLeft, Backpack } from "lucide-react";
import { useRouter } from "next/navigation";

const TopNavbar = () => {

    const router = useRouter();

    return (
        <div
            className="bg-neutral-100 dark:bg-neutral-900 shadow-md w-full rounded-md px-4 py-2 justify-between items-center flex flex-row"
        >
            <MobileSidebarToggle />

            <ArrowLeft 
                className="h-4 w-4 ml-2 cursor-pointer"
                onClick={() => router.push('/harmony')}
             />

            <div className='flex flex-row items-center gap-4 ml-auto'>
                <ModeToggle />

                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default TopNavbar;