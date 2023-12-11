"use client";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

import { NewReleases } from "@/components/new-releases";
import useNewReleases from "@/hooks/useNewReleases";
import { Button } from "@/components/ui/button";
import { SelectCountry } from "@/components/select-country";
import { useSpotify } from "@/components/providers/spotify-provider";
import { usePlayer } from "@/hooks/usePlayer";
import { cn } from "@/lib/utils";


interface HarmonyClientProps {
    title: string;
};

const HarmonyClient = ({ title }: HarmonyClientProps) => {

    const { track } = usePlayer();

    const { newReleases, setNewReleases } = useSpotify();

    const [country, setCountry] = useState<string>("");

    const { data, refetch, isFetching, isLoading, isError, } = useNewReleases({ country: country });

    const onChangeCountry = (value: string) => {
        setCountry(value);
        refetch();
    };

    useEffect(() => {
        if (data) {
            setNewReleases(data);
        };
    }, [data, setNewReleases, isFetching, isLoading, country]);

    return (
        <div className={cn(
            "flex-1 space-y-4 md:p-8 p-2 pt-6",
        )}>
            <div className="md:flex grid grid-cols-1 gap-4">
                <h1 className="text-white text-2xl font-semibold items-center justify-center flex">
                    Latest and Trending Albums
                </h1>

                <div className="md:ml-auto justify-center items-center flex">
                    <SelectCountry
                        onSelect={(value: string) => onChangeCountry(value)}
                    />
                </div>
            </div>

            {isError && (
                <div className="flex flex-col gap-y-2 mt-10 justify-center items-center">
                    could not fetch tracks
                    <Button onClick={() => refetch()}>
                        Retry
                    </Button>
                </div>
            )}

            {isLoading || isFetching ? (
                <div className="flex flex-col gap-y-2 mt-10 justify-center items-center">
                    <Loader className="h-4 w-4 animate-spin" />
                    loading data...
                </div>
            ) : (
                <div className={cn(
                    track && 'h-[calc(100%-80px)]'
                )}>
                    <NewReleases
                        albums={newReleases}
                    />
                </div>
            )}
        </div >
    );
};

export default HarmonyClient;