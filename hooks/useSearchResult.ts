import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useSpotify } from '@/components/providers/spotify-provider';

const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

const useSearchResult = (query: string) => {
    const { token } = useSpotify();

    const searchResult = async () => {
        try {
            const response = await axios.get(`${SPOTIFY_API_BASE}/search`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    q: query,
                    type: 'album',
                    limit: 10,
                    offset: 0,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error('Error searching albums');
        }
    };

    const { isLoading, isError, data } = useQuery({
        queryKey: ['search_albums', query],
        queryFn: searchResult,
        enabled: !!query, // Enable the query when 'query' exists
    });

    return {
        isLoading,
        isError,
        data: data || [], // Adjust this based on the actual response structure
    };
};

export default useSearchResult;
