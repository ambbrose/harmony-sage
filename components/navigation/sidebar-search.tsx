"use client";

import { Search } from "lucide-react"

export const SidebarSearch = () => {
    return (
        <button
            // onClick={() => setOpen(true)}
            className="group px-2 py-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 rounded-md flex items-center gap-x-2 w-full transition border-y-2"
        >
            <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />

            <p
                className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition"
            >
                Search
            </p>

            <kbd
                className="pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 py-3 font-mono text-[10px] font-medium text-muted-foreground ml-auto"
            >
                <span className="text-xs">⌘</span><span className="text-sm">K</span>
            </kbd>
        </button>
    );
};