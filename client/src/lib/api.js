const server = 'http://127.0.0.1:3000/movies/list'

const getMovies = async() => {
  const res = await fetch(server)
  const movies = await res.json()
  return movies
};

export default getMovies;
