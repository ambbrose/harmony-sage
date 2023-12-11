"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Track } from "@/types";
import { PlayButton } from "@/components/play-button";
import { usePlayer } from "@/hooks/usePlayer";


interface TrackItemProps {
    track: Track;
    albumImage: string;
};

export const TrackItem = ({ track, albumImage }: TrackItemProps) => {

    const { setTrack, setAlbumImage, player } = usePlayer();
    console.log('TRACK:- ', track)

    const [image, setImage] = useState<string>("");
    const [trackName, setTrackName] = useState<string>("");

    useEffect(() => {
        setImage(albumImage);
        setTrackName(track.name);
    }, [albumImage, track.name]);

    const onPlayTrack = (track: Track) => {
        setTrack(track);
        setAlbumImage(albumImage)
        // @ts-ignore
        player.togglePlay()
    };

    return (
        <div className="flex items-center hover:bg-zinc-800 h-16 group cursor-pointer transition">
            <div className="py-4 flex items-center">
                <div className="flex-shrink-0">
                    <Image
                        src={image}
                        alt={`Track cover - ${trackName}`}
                        height={40}
                        width={40}
                        className="w-12 h-12 rounded-md"
                    />
                </div>

                <div className="ml-4 truncate">
                    <h3 className="text-lg font-medium text-gray-300">
                        {trackName}
                    </h3>
                </div>
            </div>

            <div className="ml-auto px-4">
                <PlayButton
                    onclick={() => onPlayTrack(track)}
                />
            </div>
        </div>
    )
}