# Reggaeton Discovery App 🎵

Welcome to **Reggaeton Discovery**, a React-based web application that allows users to explore reggaeton music recommendations, discover trending artists, and preview tracks directly from Spotify.

---

## Features 🌟

- **Track Recommendations**: Get personalized reggaeton track recommendations with album cover displays.
- **Artist Spotlight**: Explore trending reggaeton artists and their popular tracks.
- **Track Previews**: Listen to 15-second previews of tracks.
- **Modern Design**: Beautiful SVG-based background and responsive design for a sleek user experience.

---

## Built With 🛠️

- [![React][React.js]][React-url]
- [![Vite][Vite-shield]][Vite-url]
- [![JavaScript][JavaScript-shield]][JavaScript-url]
- [![CSS][CSS-shield]][CSS-url]
- [![Spotify API][Spotify-shield]][Spotify-url]
- [![Axios][Axios-shield]][Axios-url]

---

## Installation Instructions 🖥️

Follow these steps to run the project on your local machine:

### Prerequisites

1. **Node.js**: Install [Node.js](https://nodejs.org) if you don’t have it already.
2. **Git**: Ensure Git is installed on your machine.
3. **Spotify Developer Account**: You’ll need a Spotify API key. Sign up at [Spotify for Developers](https://developer.spotify.com/) and create an app to get the `client_id` and `client_secret`.

---

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ELECTRONICA-2501/Nieve.git
   cd Nieve
   ```
2. Install Dependencies
   ```bash
       npm install
   ```
3. Set up environment variables
   create a .env file in your root directory
   The information should look like this but with your own Spotify Client ID & Client Secret. If you dont know how to get these, follow the following steps below, if or once you have them, proceed to step 4.

4. Run the Dev server:
   ```bash
       npm run build
       npm run dev
   ```
5. Open Browser and visit:
   After you run npm run dev, you should see a link to a locally hosted website, should look like

   http://localhost:3000/

6. After the web app has launched, you should be able to pick preview the recommended tracks from your the given reggaeton genres! Enjoy!

## How It Works ⚙️

1. **API Integration**:

   - The app integrates with the Spotify API to fetch music recommendations, album covers, and artist information.
   - Environment variables (`.env`) are used to securely store the API keys, which are injected during the build process to keep sensitive information safe.
   - Axios is used for making API requests, providing a clean and reusable structure for API calls.

2. **Routing**:

   - React Router is used to manage navigation between different sections of the application.
   - The app includes routes for:
     - **Home Page**: Onboarding and genre selection.
     - **Recommendations Page**: List of recommended tracks based on the user’s selected genre.
     - **Artist Spotlight Page**: Display of popular reggaeton artists.

3. **Dynamic Content**:

   - Tracks and artist information are dynamically rendered based on data fetched from the Spotify API.
   - Each track displays the album cover, title, artist name, and a button to play a 15-second preview (if available).
   - Artist pages showcase their profile pictures and additional details.

4. **Styling**:

   - SCSS is used for modular and reusable styling.
   - A modern design is achieved with:
     - SVG background graphics for aesthetic appeal.
     - Responsively styled components that adapt to different screen sizes.
   - Buttons and interactive elements include hover effects for enhanced user experience.

5. **Performance Optimizations**:
   - The app uses Vite for fast builds and optimized performance in production.
   - Only necessary data is fetched and displayed to minimize unnecessary API calls and enhance page responsiveness.

---

## File Structure 📂

```plaintext
├── public/
│   └── index.html       # HTML template
├── src/
│   ├── assets/          # SVG and other static assets
│   ├── components/
│   │   ├── Onboarding.jsx         # Landing page with genre preference
│   │   ├── RecommendationList.jsx # Recommendations with track previews
│   │   ├── ArtistSpotlight.jsx    # Trending reggaeton artists
│   ├── styles/
│   │   ├── main.scss    # SCSS styling
│   ├── utils/
│   │   ├── spotifyApi.js # API integration for Spotify
│   ├── App.jsx          # Main application file
│   ├── main.jsx         # Entry point for React
│   └── vite.config.js   # Vite configuration
├── .env.example         # Example environment variables file
├── package.json         # Project dependencies
├── README.md            # Documentation
```

<!-- React -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

<!-- Vite -->

[Vite-shield]: https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/

<!-- JavaScript -->

[JavaScript-shield]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/

<!-- CSS -->

[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

<!-- Spotify -->

[Spotify-shield]: https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white
[Spotify-url]: https://developer.spotify.com/documentation/web-api/

<!-- Axios -->

[Axios-shield]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
