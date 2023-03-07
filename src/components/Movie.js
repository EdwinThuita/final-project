import React, {useEffect, useState} from 'react'

function Movie({user_id}) {
  const date = new Date()
  const id = user_id


  const [allMovies, setAllMovies] = useState([])

useEffect(() =>{
  const id = localStorage.getItem('user_id')

  fetch(`http://localhost:9292/user/movies/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
  .then(response => response.json())
  .then((movies) => {
    console.log(JSON.parse(movies))
    setAllMovies(
      JSON.parse(movies).map((movie) => (
      <div>
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
      </div>
    )))
  })
}, [])
  return (
    <div>
      {allMovies}
    </div>
  )
}

export default Movie