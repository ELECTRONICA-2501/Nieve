import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [preference, setPreference] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!preference) {
      alert("Please select a preference!"); // Validation check
      return;
    }
    navigate("/recommendations", { state: { preference } });
  };

  const goToArtistSpotlight = () => {
    navigate("/artists");
  };

  return (
    <div className="container">
      <p>Select your preference:</p>
      <select
        className="form-select"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
      >
        <option value="">-- Choose --</option>
        <option value="classic">Classic Reggaeton</option>
        <option value="modern">Modern Reggaeton</option>
        <option value="party">Party Vibes</option>
        <option value="romantic">Romantic</option>
      </select>
      <div className="button-group">
        <button className="btn-discover" onClick={handleSubmit}>
          <i className="fas fa-music"></i> Discover
        </button>
        <button className="btn-spotlight" onClick={goToArtistSpotlight}>
          <i className="fas fa-user"></i> Go to Artist Spotlight
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
