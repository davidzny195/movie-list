// TMDB login user: dztesthr , pw: 12345678
import { API_KEY } from '../config/config.js'

const server = 'http://127.0.0.1:3000/movies'

const getMovies = async() => {
  let search
  const res = await fetch(server)
  const movies = await res.json()
  // console.log(movies, 'here')
  return movies
};

export default getMovies;
