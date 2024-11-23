![Welcome](images/Welcome.png)

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

### How to Create Your Spotify Client ID and Client Secret

To use the **Reggaeton Discovery** app, you'll need a Spotify Client ID and Client Secret. Follow these steps to create them:

Create a Spotify Developer Account:
   - Go to the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/).
   - Log in with your Spotify account or create a new one if you don't have an account.

Create a New App:
   - Once logged in, click the **Create an App** button.
   - Fill in the details:
     - **App Name**: Enter a name for your app, such as "Reggaeton Discovery".
     - **App Description**: Provide a brief description (e.g., "An app for discovering reggaeton music").
   - Agree to the Spotify Developer Terms of Service and click **Create**.

View Your App's Client ID and Client Secret:
   - After creating the app, you'll be redirected to the app's dashboard.
   - Here, you’ll see your **Client ID**. Click on **Show Client Secret** to view your Client Secret.
   - **Important**: Copy these values; you'll need them for the `.env` file.

Set Redirect URIs:
   - In your app dashboard, scroll down to the **Redirect URIs** section and click **Edit Settings**.
   - Add a redirect URI that matches your app's requirements. For example:
     ```
     http://localhost:3000/callback
     ```
   - Click **Save**.

5. **Add the Client ID and Client Secret to Your Project**:
   - In the root directory of the project, create a `.env` file (if it doesn’t already exist).
   - Add the following lines to the file, replacing `your_client_id` and `your_client_secret` with your actual values:
     ```env
     VITE_SPOTIFY_CLIENT_ID=your_client_id
     VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
     VITE_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
     ```

4. Run the Dev server:
   ```bash
       npm run build
       npm run dev
   ```
5. Open Browser and visit:
   After you run npm run dev, you should see a link to a locally hosted website, should look like

   http://localhost:3000/

7. After the web app has launched, you should be able to pick preview the recommended tracks from your the given reggaeton genres! Enjoy!

# Project Structure and Features

## 📂 Project Structure

### HTML Document

- **`index.html`**:
  - Serves as the entry point for the app in a Vite project.
  - Typically not modified directly in React projects unless global configurations, third-party scripts, or extra metadata are required.
  - **Note**: This project doesn't actively use or modify this file.

---

### 🎨 Styling (`Main.scss`)

- **SCSS** is used for modular and reusable styles:
  - **Modern Design Enhancements**:
    - **SVG Background Graphics**: Adds visual appeal.
    - **Responsive Components**: Adjust seamlessly to different screen sizes.
    - **Hover Effects**: Enhance user interaction for buttons and other elements.
- Styled elements include:
  - Buttons with smooth hover effects.
  - Dynamic layouts for track and artist sections.

---

## 🎵 API Integration with Spotify

### **Endpoints Used**:

1. **`/recommendations`**: Fetches recommended tracks.
2. **`/search`**: Retrieves artists in the reggaeton genre.
3. **`/artists/{id}/top-tracks`**: Fetches top tracks for a specific artist (not actively used).

These endpoints power:

- Track Recommendations.
- Artist Spotlight.
- Potential Artist-Specific Features.

### **Key Features**:

- **Secure API Key Management**:
  - API keys are stored in a `.env` file and injected during the build process to protect sensitive information.
- **Axios**:
  - Simplifies API requests with a reusable and clean structure.
  - Ensures robust error handling and token management.

---

## 📜 React Files and Functionality

### React Router:

- Manages navigation between different sections.
- **Routes** include:
  1. **Home Page**:
     - Onboarding with genre selection.
  2. **Recommendations Page**:
     - Displays a curated list of tracks based on user preference.
  3. **Artist Spotlight Page**:
     - Showcases popular reggaeton artists with profile pictures and links to their Spotify profiles.

---

### 🛠️ Dynamic Content:

- Tracks and artist information are fetched dynamically using the Spotify API.
- **Tracks**:
  - Display album cover, title, artist name, and a button to play a 15-second preview (if available).
- **Artist Spotlight**:
  - Showcases artist profiles with images, names, and links to their Spotify pages.

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
