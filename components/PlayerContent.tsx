"use client";

import { Pause, Play, SkipBack, SkipForward, X } from "lucide-react";

import { usePlayer } from "@/hooks/usePlayer";
import { Track } from "@/types";
import { MediaItem } from "@/components/media-item";

interface PlayerContentProps {
    track: Track | undefined;
    player: undefined;
    isPaused: boolean;
};

export const PlayerContent = ({ track, isPaused, player }: PlayerContentProps) => {

    const { albumImage } = usePlayer();

    const Icon = isPaused ? Pause : Play;

    const handlePlay = () => {
        // @ts-ignore
        player.togglePlay()
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 h-full">
            <div className="flex w-full justify-start">
                <div className="flex items-center gap-x-4">
                    <MediaItem
                        trackArtist={track?.artists[0].name as string}
                        trackTitle={track?.name as string}
                        trackImage={albumImage}
                    />
                </div>
            </div>

            <div className="flex md:hidden col-auto w-full justify-end items-center">
                <div
                    onClick={handlePlay}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer">
                    <Icon size={30} className="text-black" />
                </div>
            </div>

            <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
                <SkipBack
                    // onClick={() => { player.previousTrack() }}
                    size={30}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />

                <div
                    // onClick={removeTrack}
                    className='absolute block md:hidden top-2 right-2 text-gray-400 hover:text-gray-200 p-2 cursor-pointer'
                >
                    <X className='h-4 w-4 mr-4 flex items-center justify-center' />
                </div>

                <div
                    onClick={handlePlay}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
                >
                    <Icon size={30} className="text-black" />
                </div>

                <SkipForward
                    onClick={() => { }}
                    size={30}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
        </div>
    );
};