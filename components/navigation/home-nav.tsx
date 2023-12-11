"use client";

import { UserButton } from "@clerk/nextjs";
import { Profile } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HomeNav = ({ profile }: { profile: Profile | null }) => {

    const router = useRouter();

    const onLogin = () => {
        router.push('/harmony')
    };

    return (
        <nav className="shadow-sm w-full px-4 py-2 justify-between items-center flex flex-row">
            <Image
                src={'/logo1.png'}
                height={50}
                width={50}
                alt="logo"
            />

            <p className="text-gray-300 text-2xl font-extrabold font-serif">
                Harmony Sage
            </p>

            <div className='flex flex-row items-center gap-4 ml-auto'>

                {profile ? (
                    <UserButton afterSignOutUrl="/" />
                ) : (
                    <div className="flex flex-row items-center gap-4 text-gray-300 font-semibold">
                        <p
                            onClick={onLogin}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            Login
                        </p>

                        <p
                            onClick={onLogin}
                            className="hover:text-gray-400 cursor-pointer"
                        >Signup</p>
                    </div>
                )}
            </div>
        </nav>
    );
};