import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeDetails } from "../services/api";

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getAnimeDetails(id);
        console.log("Anime Details:", data); // Debugging
        setAnime(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching anime:", err);
        setError("Failed to load anime details.");
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <h2>Loading anime details...</h2>;
  if (error || !anime) return <h2>{error || "Anime not found."}</h2>;

  return (
    <div>
      <h2>{anime.title}</h2>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p>{anime.synopsis}</p>
    </div>
  );
};

export default AnimeDetails;
