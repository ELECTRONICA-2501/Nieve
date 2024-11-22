import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchArtistSpotlights } from "../utils/spotifyApi";

const ArtistSpotlight = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const getArtists = async () => {
      const artistData = await fetchArtistSpotlights();
      setArtists(artistData);
    };
    getArtists();
  }, []);

  return (
    <div className="artist-spotlight-page">
      <h2>Artist Spotlight</h2>
      <ul className="artist-list">
        {artists.map((artist) => (
          <li key={artist.id} className="artist-item">
            <img
              src={artist.image || "https://via.placeholder.com/100"}
              alt={artist.name}
              className="artist-image"
            />
            <div className="artist-info">
              <h3>{artist.name}</h3>
              <a
                href={`https://open.spotify.com/artist/${artist.id}`} // Correctly formatted template literal
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link"
              >
                View on Spotify
              </a>
            </div>
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

export default ArtistSpotlight;
