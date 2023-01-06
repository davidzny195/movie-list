import React from 'react';
import Search from './Search.jsx'
import MovieEntry from './MovieEntry.jsx'
import AddMovie from './AddMovie.jsx'
import getMovies from '../lib/api.js'


const MovieList = () => {
  const [movies, setMovies] = React.useState([
    {title: 'Mean Girls', display: false, watched: false},
    {title: 'Hackers', display: false, watched: false},
    {title: 'The Grey', display: false, watched: false},
    {title: 'Sunshine', display: false, watched: false},
    {title: 'Ex Machina', display: false, watched: false},
  ])
  const [query, setQuery] = React.useState('')
  const [tab, setTab] = React.useState(false)

  const handleSearch = (query) => {
    setQuery(query)
  }

  const handleAdd = (movie) => {
    setMovies([...movies, movie])
  }

  const handleView = (name, key) => {
    // const list = movies.map((i) => {
    //   if (i.title === name) {
    //     i[key] = !i[key]
    //     if (key === 'watched') {
    //       i.display = !i.display
    //     }
    //   }
    //   return i
    // })
    const list = movies.map((i) => i.title === name ? !i[key] : i)
    setMovies(list)
  }

  const populateMovies = () => {
    getMovies()
  }

  React.useEffect(() => {
    populateMovies()
  }, [])

    return (
      <div style={{paddingTop: '60px'}}>
      <AddMovie handleAdd={handleAdd} />
      <div style={{display: 'flex'}}>
        <button onClick={() => setTab(!tab)}>{tab ? 'Watched' : 'To Watch'}</button>
        <Search handleSearch={handleSearch}/>
      </div>
      <div>
        {movies.length ? movies.filter((item) => item.title.includes(query) && item.watched === tab).map((movie, idx) => {
          return <MovieEntry movie={movie} key={idx} handleView={handleView} />
        }) : <p>no movies found</p>}
      </div>
    </div>
  )

}

export default MovieList;