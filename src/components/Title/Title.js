import { NavLink } from 'react-router-dom'
import React from 'react';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className="Title">
    <div>
      <h1>New Names</h1>
	  <div className="Title-Subtitle">Looking for a fresh face in America's next President?</div>
      </div>
      <div>
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
    </div>
  )
}



export default Title