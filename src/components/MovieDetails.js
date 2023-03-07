import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function MovieDetails({user_id}) {
  const {movieId} = useParams()
  const [movies, setMovie] = useState()

  function handleClick(e) {
    fetch(`http://localhost:9292/movies/${movieId}`,{
      method: 'PATCH',
      headers:
        {'Content-Type': 'application/json'},
      body: JSON.stringify({
        completion_status:  "Completed"
      })
    })
    .then(response => response.json())
    .then((movie) => {
      setMovie(
        <div class="card">
          <div class="card-body">
              {movie.name} <br />
              {movie.description} <br />
              {movie.completion_status} <br />
              {movie.date} <br />
              {movie.due_date}
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
      )
    })
  }
  useEffect(() =>{
    fetch(`http://localhost:9292/movies/${movieId}`)
    .then(response => response.json())
    .then((movie) => {
      console.log(movie)
      setMovie(
        <div class="card">
          <div class="card-body">
              <h1>{movie.name} </h1><br />
              {movie.description} <br />
              {movie.completion_status} <br />
              {movie.date} <br />
              {movie.due_date}
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
      )
    })
  }, [])

  return (
    <div>
      {movies}
    </div>
  )
}

export default MovieDetails