import { NavLink } from 'react-router-dom'
import React from 'react';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className="Title a">
    <div>
      <h1>New Names</h1>
	  <div className="Title-Subtitle">For those of us looking for a fresh face in America's President.</div>
      </div>
      <div>
      <NavLink 
	      className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	      to="/">Declared</NavLink>
      <NavLink 
	      className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	      to="/about">About</NavLink>
      <RandomSpace />
        </div>
    </div>
  )
}



export default Title