import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
      < >
        <header className="HomePageDiv sticky-top">
          <nav>
              <h3>Sabita</h3>
              <div>
                  <Link to="/">Home</Link>
                  <Link to="/project">Projects</Link>
                  <Link to="/contact">Contact</Link>
                  <a href='/'><i class="fas fa-sun dark"></i></a>
              </div>
          </nav>
        </header>
    </>
  )
}

export default Navbar