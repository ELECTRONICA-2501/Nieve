import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRecommendations } from "../utils/spotifyApi";

const RecommendationList = () => {
  const [tracks, setTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState(null); // Track currently being played
  const audioRef = React.useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchTracks = async () => {
      const recommendations = await fetchRecommendations();
      setTracks(recommendations);
    };
    fetchTracks();
  }, []);

  const playPreview = (previewUrl) => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop currently playing preview
    }

    if (playingTrack === previewUrl) {
      // If the same track is clicked again, stop it
      setPlayingTrack(null);
    } else {
      setPlayingTrack(previewUrl);
      const audio = new Audio(previewUrl);
      audioRef.current = audio;
      audio.play();
    }
  };

  return (
    <div className="recommendation-list">
      <h2>Recommended Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} className="track-item">
            <img
              src={track.albumCover}
              alt={`${track.name} cover`}
              className="album-cover"
            />
            <div>
              <h3>{track.name}</h3>
              <p>{track.artist}</p>
            </div>
            {track.previewUrl ? (
              <button onClick={() => playPreview(track.previewUrl)}>
                {playingTrack === track.previewUrl ? "Pause" : "Play Preview"}
              </button>
            ) : (
              <p>No preview available</p>
            )}
          </li>
        ))}
      </ul>
      {/* Back Button */}
      <button className="btn-back" onClick={() => navigate("/")}>
        Back to Preferences
      </button>
    </div>
  );
};

export default RecommendationList;
