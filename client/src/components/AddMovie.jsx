import React from 'react';

const AddMovie = ({handleAdd}) => {
  const [name, setName] = React.useState('')

  const handleAddMovie = () => {
    handleAdd({
      title: name,
      watched: false,
      display: false
    })
  }

  return (
    <div>
      <input value={name} placeholder="Add your movie" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAddMovie}>Go</button>
    </div>
  )

}

export default AddMovie;