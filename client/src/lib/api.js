const server = 'http://127.0.0.1:3000/movies/list'

const getMovies = async() => {
  const res = await fetch(server)
  const movies = await res.json()
  return movies
};

const addMovie = async(params) => {
  const res = await fetch(server, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  if (res.status !== 201) return false
  return true
}

const deleteMovie = async(movieId) => {
  const res = await fetch(server, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: movieId })
  })

  if (res.status !== 200) return false
  return true
}

export { getMovies, addMovie, deleteMovie };
