export interface NewReleaseType {
    id: string;
    name: string;
    title: string;
    album_type: string;
    href: string;
    total_track: number;
    release: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    artists: {
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[]
};

export interface Track {
    id: string;
    name: string;
    uri: string
    href?: string;
    duration_ms?: number;
    artists: {
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    album: {
        images: {
            url: string
        }[]
    }
}

export interface Artist {
    id: string;
    name: string;
}