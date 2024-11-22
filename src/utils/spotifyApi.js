import axios from "axios";

// Spotify API URLs
const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

// Environment variables
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken = null; // In-memory token storage

/**
 * Fetch a new access token using the Client Credentials flow.
 */
const fetchAccessToken = async () => {
  try {
    const response = await axios.post(
      SPOTIFY_TOKEN_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    accessToken = response.data.access_token;
    console.log("New Access Token Retrieved:", accessToken);
    return accessToken;
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch Spotify access token.");
  }
};

/**
 * Create an Axios instance with dynamic token handling.
 */
const axiosInstance = axios.create({
  baseURL: SPOTIFY_BASE_URL,
});

// Intercept requests to add the Authorization header dynamically
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!accessToken) {
      await fetchAccessToken(); // Fetch a new token if not available
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Fetch recommendations for reggaeton tracks.
 */
export const fetchRecommendations = async () => {
  try {
    const response = await axiosInstance.get(
      "/recommendations?seed_genres=reggaeton&limit=20"
    );
    return response.data.tracks.map((track) => ({
      id: track.id,
      name: track.name,
      albumCover:
        track.album.images?.[0]?.url || "https://via.placeholder.com/75", // Add a fallback image
      artist: track.artists?.[0]?.name || "Unknown Artist", // Handle undefined artist names
      previewUrl: track.preview_url, // Track preview URL
    }));
  } catch (error) {
    console.error(
      "Error fetching recommendations:",
      error.response?.data || error.message
    );
    return [];
  }
};

/**
 * Fetch top reggaeton artists for spotlight.
 */
export const fetchArtistSpotlights = async () => {
  try {
    const response = await axiosInstance.get(
      "/search?q=genre:reggaeton&type=artist&limit=10"
    );
    console.log("Spotify API Response:", response.data); // Debugging
    return response.data.artists.items.map((artist) => ({
      id: artist.id,
      name: artist.name,
      image: artist.images[0]?.url || "https://via.placeholder.com/100",
    }));
  } catch (error) {
    console.error(
      "Error fetching artist data:",
      error.response?.data || error.message
    );
    return [];
  }
};

/**
 * Fetch an artist's top tracks.
 * @param {string} artistId - Spotify artist ID.
 */
export const fetchArtistTopTracks = async (artistId) => {
  try {
    const response = await axiosInstance.get(
      `/artists/${artistId}/top-tracks?market=US`
    );
    return response.data.tracks.map((track) => ({
      name: track.name,
      albumImage: track.album.images[0]?.url, // Album cover
    }));
  } catch (error) {
    console.error(
      `Error fetching top tracks for artist ${artistId}:`,
      error.response?.data || error.message
    );
    return [];
  }
};
