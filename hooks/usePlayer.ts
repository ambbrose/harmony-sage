import { create } from 'zustand';

import { Track } from '@/types';

interface PlayerStore {
  track: Track | undefined;
  setTrack: (track: Track | undefined) => void;

  album: Track[];
  setAlbum: (tracks: Track[]) => void;

  player: undefined;
  setPlayer: (player: any) => void;

  isPaused: boolean;
  setIsPaused: (isPaused: boolean) => void;
  
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;

  albumImage: string;
  setAlbumImage: (imageURL: string) => void;
};

export const usePlayer = create<PlayerStore>((set) => ({
  track: undefined,
  setTrack: (track: Track | undefined) => set({ track: track }),

  album: [],
  setAlbum: (tracks: Track[]) => set({ album: tracks }),

  player: undefined,
  setPlayer: (player: any) => set({ player: player }),

  isPaused: false,
  setIsPaused: (isPaused: boolean) => set({ isPaused: isPaused }),
  
  isActive: false,
  setIsActive: (isActive: boolean) => set({ isActive: isActive }),

  albumImage: "",
  setAlbumImage: (imageURL: string) => set({albumImage: imageURL})
}));
