import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSpotify } from '@/components/providers/spotify-provider';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

interface TracksProps {
    country?: string;
};


const useNewReleases = ({ country }: TracksProps) => {
    const { token } = useSpotify();

    const fetchTrendingTracks = async () => {
        try {
            const response = await axios.get(`${SPOTIFY_API_BASE}/browse/new-releases`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 40, // Number of tracks to retrieve
                    offset: 0, // Offset for pagination (if needed)
                    country: country || 'NG', // Replace with your desired country code (US, GB, etc.)
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching trending tracks');
        }
    };

    const { isLoading, isError, data, refetch, isFetching } = useQuery({
        queryKey: ['new_releases'],
        queryFn: fetchTrendingTracks,
        enabled: true
    });
    

    return {
        isLoading,
        isFetching,
        refetch,
        isError,
        data: data?.albums.items || [], // Assuming the response structure contains an 'items' array for tracks
    };
};

export default useNewReleases;
