"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

import { NewReleaseType } from '@/types';

type SpotifyContextType = {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;

    newReleases: NewReleaseType[];
    setNewReleases: React.Dispatch<React.SetStateAction<NewReleaseType[]>>;

    
};

const SpotifyContext = createContext<SpotifyContextType>({
    token: null,
    setToken: () => null,

    newReleases: [],
    setNewReleases: () => null,
});

export const useSpotify = () => {
    return useContext(SpotifyContext);
};

export const SpotifyProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [newReleases, setNewReleases] = useState<NewReleaseType[]>([]);

    return (
        <SpotifyContext.Provider value={{ token, setToken, newReleases, setNewReleases }}>
            {children}
        </SpotifyContext.Provider>
    );
};
