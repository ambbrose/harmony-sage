import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSpotify } from '@/components/providers/spotify-provider';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

const useGetAlbum = ({ albumId }: { albumId: string }) => {

    const { token } = useSpotify();

    const fetchAlbum = async () => {
        
        const response = await axios.get(`${SPOTIFY_API_BASE}/albums/${albumId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    };

    const { isLoading, isFetching, refetch, isError, data } = useQuery({
        queryKey: ["fetching_album"],
        queryFn: fetchAlbum,
        enabled: true
    });

    return {
        isLoading,
        isError,
        albumTracks: data?.tracks.items || [],
        albumImage: data?.images[0].url,
        albumName: data?.name,
        total_tracks: data?.total_tracks,
        release_date: data?.release_date,
        label: data?.label,
        artists: data?.artists || [],
        data:data
    };
};

export default useGetAlbum;
