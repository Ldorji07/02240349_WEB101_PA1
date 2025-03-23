### Anime Explorer 🎥
- main.jsx (Starting Point)
This file is where your React app starts.
It loads the main App.jsx component and places it inside the div id="root" in index.html.
It also imports global styles.
- App.jsx (Main Component & Navigation)
This is the main file that manages navigation between pages.
It includes a Navbar (so users can navigate back home).
Uses React Router to define routes:
/ → Shows the home page (anime list).
/anime/:id → Shows details for a specific anime.
- Home.jsx (Anime List Page)
Fetches a list of top animes from an API.
Displays the anime titles as clickable links.
Clicking on an anime takes the user to the Anime Details page.
- AnimeDetails.jsx (Anime Details Page)
Gets the anime ID from the URL.
Fetches details (title, image, description) for that specific anime.
Shows a loading message while the data is being fetched.
- api.js (API Functions)
Contains two functions to fetch data from the Jikan API:
One function gets the top anime list.
Another function gets details of a specific anime.
These functions are used in Home.jsx and AnimeDetails.jsx.
- Navbar.jsx (Top Menu)
A simple navigation bar with a Home button.
Always visible at the top for easy navigation.
- styles.css (Basic Styling)
Adds simple styles like font, text alignment, and navigation styles.
- How It Works Together:
User opens the app → Home.jsx fetches and shows anime list.
User clicks an anime → Goes to AnimeDetails.jsx, which fetches details.
Navbar lets user go back to home anytime.
That’s a simple breakdown! Let me know if you need anything else. 