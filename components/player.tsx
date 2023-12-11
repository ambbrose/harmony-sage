"use client"

import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Track } from '@/types';
import { usePlayer } from '@/hooks/usePlayer';
import { PlayerContent } from '@/components/PlayerContent';
import { useSpotify } from '@/components/providers/spotify-provider';

interface SpotifyPlayerProps {};

export const SpotifyPlayer = ({ }: SpotifyPlayerProps) => {

    const { token } = useSpotify();

    const { track, setTrack, player, setPlayer, isPaused, setIsPaused, isActive, setIsActive } = usePlayer();

    const [current_track, setCurrentTrack] = useState<Track | undefined>(track);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        if (track) {
            setCurrentTrack(track);
        };

        //@ts-ignore
        window.onSpotifyWebPlaybackSDKReady = () => {

            //@ts-ignore
            const player = new window.Spotify.Player({
                name: 'Harmony Sage',
                
                getOAuthToken: (cb:any) => { cb(token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }: { device_id: string }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }: { device_id: string }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ((state: any) => {

                if (!state) {
                    return;
                }

                setCurrentTrack(state.track_window.current_track);
                setIsPaused(state.paused);


                player.getCurrentState().then((state: any) => {
                    (!state) ? setIsActive(false) : setIsActive(true)
                });

            }));

            player.connect();

        };
    }, [track]);

    const removeTrack = () => {
        setCurrentTrack(undefined)
        setTrack(undefined);
    };

    if (!current_track) {
        return null;
    };

    return (
        <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
            <div
                onClick={removeTrack}
                className='absolute hidden md:block top-2 right-2 text-gray-400 hover:text-gray-200 p-2 cursor-pointer'
            >
                <X className='h-4 w-4 mr-4 flex items-center justify-center' />
            </div>

            <PlayerContent
                track={current_track}
                player={player}
                isPaused={isPaused}
            />
        </div>
    );
};