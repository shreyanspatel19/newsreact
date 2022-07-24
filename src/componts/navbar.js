import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class navbar extends Component {
  render() {
    return (
<nav className="navbar container navbar-dark navbar-expand-lg my-1 bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink >
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          country
          </NavLink >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" to="/Ukraine ">Ukraine </NavLink ></li>
            <li><NavLink className="dropdown-item" to="/United_States_of_America">United States of America</NavLink ></li>
            <li><NavLink className="dropdown-item" to="/Russian_Federation">Russian Federation</NavLink ></li>
          </ul>
        </li>

        <li className="nav-item">
          <NavLink key="ok" className="nav-link" to="/business">business</NavLink >
         </li>
         <li className="nav-item">
          <NavLink key="2ok" className="nav-link" to="/entertainment">entertainment</NavLink >
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/">general</NavLink >
         </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/health">health</NavLink >
         </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/science">science</NavLink >
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/sports">sports</NavLink >
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/technology">technology</NavLink >
        </li>

      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
  }
}

export default navbar