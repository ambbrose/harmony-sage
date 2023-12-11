"use client";

import { NewReleaseType } from "@/types";
import { AlbumItem } from "@/components/album-item";

interface NewReleaseProps {
    albums: NewReleaseType[];
};

export const NewReleases = ({ albums }: NewReleaseProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {albums.map((album) =>(
                <AlbumItem 
                    key={album.id}
                    album={album}
                />
            ))}
        </div>
    );
};