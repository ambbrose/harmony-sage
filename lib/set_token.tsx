"use client";

import { useSpotify } from "@/components/providers/spotify-provider";

export const SetToken = ({ token }: { token: string }) => {
    const { setToken } = useSpotify();

    setToken(token);

    return;
}