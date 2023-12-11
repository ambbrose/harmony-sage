"use client";

import useGetAlbum from "@/hooks/useGetAlbum";
import { TrackItem } from "@/components/tracks-item";
import { Track } from "@/types";

export const Albumclient = ({ albumId }: { albumId: string }) => {

    const {
        albumTracks, albumImage, albumName, artists, release_date
    } = useGetAlbum({ albumId: albumId });

    const mainArtist = artists[0]?.name;

    return (
        <div className="flex flex-col h-full pt-4">
            <div className="relative h-96 rounded-md bg-center bg-contain" style={{ backgroundImage: `url(${albumImage})` }} />

            <div className="flex items-center justify-center">
                <div className="text-center mt-3">
                    <h1 className="text-4xl font-bold text-rose-700">
                        Album Title: {albumName}
                    </h1>

                    <h2 className="text-2xl font-bold text-indigo-800">
                        Artist: {mainArtist}
                    </h2>

                    <p className="text-gray-500">
                        Release Date: {release_date}
                    </p>
                </div>
            </div>

            <h2 className="p-2 font-bold text-3xl">
                Album Tracks
            </h2>

            <div className="divide-y divide-gray-800">
                {albumTracks.map((track: Track) => (
                    <TrackItem
                        key={track.id}
                        track={track}
                        albumImage={albumImage}
                    />
                ))}
            </div>
        </div>
    );
};