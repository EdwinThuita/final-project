import {Routes, Route, useNavigate} from 'react-router-dom'
import Movie from './components/Movie';
import Home from './views/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import NewMovie from './components/Newmovies';
import MovieDetails from './components/MovieDetails';
import UpdateMovie from './components/update';

function App() {

  const [user, setUser] = useState({})

  const navigate = useNavigate()
useEffect(() => {

  const user_id = localStorage.getItem('user_id')
  user_id?navigate("/"):navigate("/login")
}, [])

console.log(user)
  return (
    <div>
      <NavBar setUser={setUser} />
      <Routes>
        <Route exact path = '/' element = {<Home user = {user} />}/>
        <Route exact path = '/updatemovies' element = {<UpdateMovie/>}/>
        <Route exact path = '/login' element = {<Login setUser = {setUser}/>} />
        <Route exact path = '/newmovies' element = {<NewMovie />}/> 
        <Route exact path = '/moviedetails/:movieId' element = {<MovieDetails />}/>
      </Routes>
    </div>
  );
}

export default App;