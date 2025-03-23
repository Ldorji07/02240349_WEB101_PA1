import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  return (
    <div className="card">
      <img src={anime.image} alt={anime.title} />
      <h3>{anime.title}</h3>
      <Link to={`/anime/${anime.id}`}>Details</Link>
    </div>
  );
};

export default AnimeCard;
