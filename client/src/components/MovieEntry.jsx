import React from 'react';

const MovieEntry = ({ movie, handleView, handleToggle }) => {

  return (
  <div>
    <div>
      <p onClick={() => handleView(movie.title, 'display')} style={{cursor: 'pointer'}}>{movie.title}</p>
      { movie.display && <div>
        <button onClick={() => handleView(movie.title, 'watched')}>{ movie.watched ? 'Watched' : 'To Watch'}</button>
      </div>
      }
    </div>
  </div>
  )
}

export default MovieEntry;