"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { NewReleaseType } from "@/types";

interface AlbumItemProps {
    album: NewReleaseType;
};

export const AlbumItem = ({ album }: AlbumItemProps) => {

    const router = useRouter();

    const image = album.images[0].url;

    const featuring = album.artists.slice(1);

    const onClick = () => {
        router.push(`/harmony/album/${album.id}`);
    };

    return (
        <div 
            onClick={onClick}
            className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
        >
            <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
                <Image
                    className="object-cover"
                    src={image || '/logo.png'}
                    fill
                    alt="Image"
                />
            </div>

            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <p className="font-semibold truncate w-full">
                    {album.name}
                </p>

                <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                    {album.artists[0].name} 
                    {album.artists.length > 1 && ' Featuring '}
                    {album.artists.length > 1 && featuring.map((item) => (
                        <span key={item.id}>{item.name},</span>
                    ))}
                </p>
            </div>
        </div>
    );
};