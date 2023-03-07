import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar({setUser}) {
  const navigate = useNavigate()

  function onclick() {
    localStorage.clear()
    setUser({})
    navigate("/login")
  }
  function Home() {
    navigate("/")
  }
  function Today() {
    navigate("movies")
  }
  function NewMovie() {
    navigate("/newmovie")
  }

  return (
    <div className='nav'>
      <h1>Movie App</h1>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={Home}>Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={Today}>Movies</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={NewMovie}>New Movies</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" onClick={onclick}>LogOut</button>
  </li>
</ul>
    </div>
  )
}

export default NavBar