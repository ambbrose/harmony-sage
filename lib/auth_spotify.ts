
import { currentProfile } from "./current-profile";
import { redirectToSignIn } from "@clerk/nextjs";

export const getSpotifyToken = async () => {
    const profile = await currentProfile();

    // if (!profile) {
    //     return redirectToSignIn()
    // };

    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    const authOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    };

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', authOptions);

        if (response.ok) {
            const data = await response.json();
            const token = data.access_token;
            return token;
        } else {
            throw new Error('Failed to fetch token');
        };
    } catch (error) {
        console.error('Error fetching token:', error);
        return null;
    }
};