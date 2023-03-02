import { NavLink } from 'react-router-dom'
import React from 'react';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className="Title">
      <div className="Tootle">New Names</div>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">Declared</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/potential">Potential</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <RandomSpace />
    </div>
  )
}



export default Title