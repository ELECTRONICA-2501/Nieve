import { useEffect, useState } from "react";
import { fetchArtistSpotlights } from "../utils/spotifyApi";

const ArtistSpotlight = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const artistData = await fetchArtistSpotlights();
      setArtists(artistData);
    };
    getArtists();
  }, []);

  return (
    <div>
      <h2>Artist Spotlight</h2>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <p>{artist.name}</p>
            <img src={artist.images[0]?.url} alt={artist.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistSpotlight;
