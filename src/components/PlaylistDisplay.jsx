import { useEffect, useState } from "react";
import { fetchRecommendations } from "../utils/spotifyApi";
import PlaylistDisplay from "./PlaylistDisplay";

const RecommendationList = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      const recs = await fetchRecommendations();
      const formattedTracks = recs.map((track) => ({
        name: track.name,
        artist: track.artists.map((artist) => artist.name).join(", "),
        albumArt: track.album.images[0]?.url,
        previewUrl: track.preview_url,
      }));
      setTracks(formattedTracks);
    };
    getRecommendations();
  }, []);

  return (
    <div>
      <h2>Discover Reggaeton</h2>
      <PlaylistDisplay playlist={tracks} />
    </div>
  );
};

export default RecommendationList;
