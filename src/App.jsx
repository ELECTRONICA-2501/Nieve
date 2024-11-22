import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import RecommendationList from "./components/RecommendationList";
import ArtistSpotlight from "./components/ArtistSpotlight";
import "./scss/main.scss";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Routes */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <h1>Welcome to Reggaeton Discovery</h1>
                  <p>Find your vibe with the best reggaeton tracks.</p>
                </section>
                <Onboarding />
              </>
            }
          />
          <Route
            path="/recommendations"
            element={
              <>
                <section className="content light"></section>
                <RecommendationList />
              </>
            }
          />
          <Route
            path="/artists"
            element={
              <>
                <section className="content dark">
                  <h2>Spotlight Artists</h2>
                  <p>Discover trending reggaeton artists.</p>
                </section>
                <ArtistSpotlight />
              </>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
