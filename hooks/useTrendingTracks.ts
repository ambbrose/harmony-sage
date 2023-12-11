import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSpotify } from '@/components/providers/spotify-provider';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

interface TracksProps {
    ctry?: string;
};

const useTrendingTracks = () => {
    const { token } = useSpotify();

    const fetchTrendingTracks = async () => {
        try {
            const response = await axios.get(`${SPOTIFY_API_BASE}/browse/new-releases`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    limit: 10, // Number of tracks to retrieve
                    offset: 0, // Offset for pagination (if needed)
                    country: 'NG', // Replace with your desired country code (US, GB, etc.)
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error fetching trending tracks');
        }
    };

    const { isLoading, isError, data } = useQuery({
        queryKey: ['trending_tracks'],
        queryFn: fetchTrendingTracks,
        enabled: true
    });

    return {
        isLoading,
        isError,
        tracks: data?.albums.items || [], // Assuming the response structure contains an 'items' array for tracks
    };
};

export default useTrendingTracks;
