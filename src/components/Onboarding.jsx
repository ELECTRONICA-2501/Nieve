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

  return (
    <div className="container mt-5">
      <p>Select your preference:</p>
      <select
        className="form-select mb-3"
        value={preference}
        onChange={(e) => setPreference(e.target.value)}
      >
        <option value="">-- Choose --</option>
        <option value="classic">Classic Reggaeton</option>
        <option value="modern">Modern Reggaeton</option>
        <option value="party">Party Vibes</option>
        <option value="romantic">Romantic</option>
      </select>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Discover
      </button>
    </div>
  );
};

export default Onboarding;
