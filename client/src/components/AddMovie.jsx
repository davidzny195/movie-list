import React from 'react';
import { addMovie } from '../lib/api.js'

const AddMovie = ({handleAdd}) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  const handleAddMovie = async () => {
    const params = {
      title: name,
      description: description,
      watched: 0
    }
    const res = await addMovie(params)
    if (res) handleAdd()

  }

  return (
    <div>
      <input value={name} placeholder="title" onChange={(e) => setName(e.target.value)} />
      <input value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddMovie}>Add</button>
    </div>
  )

}

export default AddMovie;