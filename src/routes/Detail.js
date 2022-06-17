import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div>
            <Link to={"/"}>Home</Link>
          </div>
          <h2>{movie.year}</h2>
          <h2>rating: {movie.rating}</h2>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.id} />
          <p>{movie.description_full}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default Detail;
