"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/navigation/sidebar";

export const MobileSidebarToggle = () => {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    className="md:hidden"
                >
                    <Menu className='text-black dark:text-white bg-cover bg-center' />
                </Button>
            </SheetTrigger>

            <SheetContent
                side={'left'}
                className="p-0 gap-0"
            >
                <Sidebar className="w-full" />
            </SheetContent>
        </Sheet>
    );
};