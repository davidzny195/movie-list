// TMDB login user: dztesthr , pw: 12345678
import { API_KEY } from '../config/config.js'

const getMovies = async() => {
  let search
  const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}&query=fight`)
  const movies = await res.json()
  console.log(movies)
  return movies
};

export default getMovies;
