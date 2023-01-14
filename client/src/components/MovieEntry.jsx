import React from 'react';
import { deleteMovie } from '../lib/api.js'

const MovieEntry = ({ movie, handleView, handleUpdate }) => {
  const [display, setDisplay] = React.useState(false)

  const handleDelete = async () => {
    const res = await deleteMovie(movie.id)
    if (res) handleUpdate()
  }

  return (
  <div>
    <div>
      <p onClick={() => setDisplay(!display)} style={{cursor: 'pointer'}}>{movie.title}</p>
      { display && <div style={{border: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>{movie.description}</p>

        <button onClick={() => handleDelete()}>Delete</button>
        <button onClick={() => handleView(movie.title, 'watched')} style={{height: '25px'}}>{ movie.watched ? 'Watched' : 'To Watch'}</button>
      </div>
      }
    </div>
  </div>
  )
}

export default MovieEntry;