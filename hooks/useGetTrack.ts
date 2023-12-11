import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSpotify } from '@/components/providers/spotify-provider';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

const useGetTrack = ({ trackId }: { trackId: string }) => {

    const { token } = useSpotify();

    const fetchAlbum = async () => {
        
        const response = await axios.get(`${SPOTIFY_API_BASE}/tracks/${trackId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    };

    const { data } = useQuery({
        queryKey: ["fetching_track"],
        queryFn: fetchAlbum,
        enabled: true
    });

    return {
        data,
        featuredArtists: data?.artists || []
    };
};

export default useGetTrack;
