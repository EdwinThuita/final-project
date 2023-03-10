import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Movie from '../components/Movie'
import MovieDetails from '../components/MovieDetails'


function Home() {

  function handleChange(e){
    setAllMovies(
      Movies.filter(movie => movie.available.includes(e.target.value)).map((movie) => (
          <div class="card" style={{width: "18rem"}}>
            <div class="card-body" >
              <h5 class="card-title">{movie.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{movie.status}</h6>
              <p class="card-text">{movie.description}</p>
              <img src={movie.image} alt="loading" />
              <Link to={`/moviedetails/${movie.id}`} class="card-link">more details</Link>
            </div>
          </div>
      )))
  }

  const [Movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])

  const user_id = localStorage.getItem('user_id')



useEffect(() =>{
  fetch(`http://localhost:9292/`)
  .then(response => response.json())
  .then((movies) => {
    console.log(movies)
    setMovies(movies)
    setAllMovies(
    movies.map((movie) => (
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body" >
            <h5 class="card-title">{movie.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{movie.status}</h6>
            <p class="card-text">{movie.description}</p>
            <img src={movie.image} alt="loading" />
            <Link to={`/moviedetails/${movie.id}`} class="card-link">more details</Link>
          </div>
        </div>
    )))
  })
}, [])
  return (
    <div>
      <div>
      <select onChange={handleChange}>
        <option value="">select</option>
        <option value="available">available</option>
        <option value="not released">not released</option>
        <option value="fully booked">fully booked</option>
      </select>
      </div>
      <div>
      <input type="text"placeholder='Search' />
      <button>Search</button>
      </div>
      {allMovies}
    </div>
  )
}

export default Home