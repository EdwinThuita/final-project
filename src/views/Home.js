import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Movie from '../components/Movie'
import MovieDetails from '../components/MovieDetails'


function Home() {

  function handleChange(e){
    setAllMovies(
      movies.filter(movie => movie.completion_status.includes(e.target.value)).map((movie) => (
          <div class="card" style={{width: "18rem"}}>
            <div class="card-body" >
              <h5 class="card-title">{movie.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{movie.status}</h6>
              <p class="card-text">{movie.description}</p>
              <Link to={`/moviedetails/${movie.id}`} class="card-link">more details</Link>
            </div>
          </div>
      )))
  }

  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState([])

  const user_id = localStorage.getItem('user_id')



useEffect(() =>{
  fetch(`http://localhost:9292/user/tasks/${user_id}`)
  .then(response => response.json())
  .then((tasks) => {
    console.log(tasks)
    setTasks(tasks)
    setAllTasks(
    tasks.map((task) => (
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body" >
            <h5 class="card-title">{task.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{task.status}</h6>
            <p class="card-text">{task.description}</p>
            <Link to={`/taskdetails/${task.id}`} class="card-link">more details</Link>
          </div>
        </div>
    )))
  })
}, [])
  return (
    <div>
      <div>
      <select onChange={handleChange}>
        <option value="">- -</option>
        <option value="Complete">Completed</option>
        <option value="In progress">In progress</option>
        <option value="On hold">On hold</option>
      </select>
      </div>
      {allTasks}
    </div>
  )
}

export default Home