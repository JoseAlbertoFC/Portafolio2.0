import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </nav>
  )
}

export default Navbar