import React from 'react';
import Search from './Search.jsx'
import MovieEntry from './MovieEntry.jsx'
import AddMovie from './AddMovie.jsx'


const MovieList = () => {
  const [movies, setMovies] = React.useState([{title: 'Test', display: false, watched: false}])
  const [query, setQuery] = React.useState('')
  const [tab, setTab] = React.useState(false)

  const handleSearch = (query) => {
    setQuery(query)
  }

  const handleAdd = (movie) => {
    setMovies([...movies, movie])
  }

  const handleView = (name, key) => {
    const list = movies.map((i) => {
      if (i.title === name) {
        i[key] = !i[key]
        if (key === 'watched') {
          i.display = !i.display
        }
      }
      return i
    })
    console.log(list)
    setMovies(list)
  }

    return (
      <div>
      <button onClick={() => setTab(true)}>Watched</button>
      <button onClick={() => setTab(false)}>To Watch</button>
      <AddMovie handleAdd={handleAdd} />
      <Search handleSearch={handleSearch}/>
      <div>
        {movies.length ? movies.filter((item) => item.title.includes(query) && item.watched === tab).map((movie, idx) => {
          return <MovieEntry movie={movie} key={idx} handleView={handleView} />
        }) : <p>no movies found</p>}
      </div>
    </div>
  )

}

export default MovieList;