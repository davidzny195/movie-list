import React from 'react';

const MovieEntry = ({ movie, handleView, handleToggle }) => {
  const [display, setDisplay] = React.useState(false)

  return (
  <div>
    <div>
      <p onClick={() => setDisplay(!display)} style={{cursor: 'pointer'}}>{movie.title}</p>
      { display && <div style={{border: '1px solid black', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <p>Watched:</p><button onClick={() => handleView(movie.title, 'watched')} style={{height: '25px'}}>{ movie.watched ? 'Watched' : 'To Watch'}</button>
      </div>
      }
    </div>
  </div>
  )
}

export default MovieEntry;