"use client";

import { Play } from "lucide-react";

interface PlayButtonProps {
    onclick: () => void;
};

export const PlayButton = ({onclick}: PlayButtonProps) => {

    return (
        <button
            onClick={onclick} 
            className="transition opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center bg-neutral-700 p-3 drop-shadow-lg translate translate-x-1 group-hover:translate-x-0 hover:scale-110">
            <Play className="text-white dark:fill-white" />
        </button>
    );
};