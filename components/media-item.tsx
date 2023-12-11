"use client";

import Image from "next/image";

interface MediaItemProps {
    trackTitle: string;
    trackArtist: string;
    trackImage: string;
};

export const MediaItem = ({ trackArtist, trackTitle, trackImage }: MediaItemProps) => {
    console.log('IMAGE:- ', trackImage)
    return (
        <div className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md">
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image
                    fill
                    src={trackImage}
                    alt="track-image"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">{trackTitle}</p>
                <p className="text-neutral-400 text-sm truncate">
                    By {trackArtist}
                </p>
            </div>
        </div>
    );
};