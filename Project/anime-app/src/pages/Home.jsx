import { useEffect, useState } from "react";
import { getAnimeList } from "../services/api";
import AnimeCard from "../components/AnimeCard";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimeList();
        console.log("Anime Data:", data); // Debugging
        setAnimeList(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load anime list.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h2>Loading anime...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Latest Anime</h2>
      <div className="anime-container">
        {animeList.length > 0 ? (
          animeList.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
        ) : (
          <p>No anime found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
