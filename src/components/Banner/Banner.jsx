import React from 'react'
import './Banner.css'
import Type from './Type'

const Banner = () => {
  return (
      <div>
          <main >
            <div className="leftCircle"></div>
            <div className="manDiv"></div>
            <div className="rightCircle">
                <i className="fab fa-instagram"></i>
                  <i className="fab fa-chrome"></i>
                  <i className="fab fa-behance"></i>
            </div>
            <div className="content">
                <h1>Sabita</h1>
                <h1>Sitaula </h1>
                <p> Hi, I am a <span><Type/></span>lived in Kathmandu, Nepal.</p>
                
                <button>Hire Me</button>
            </div>
            <div className="icon"></div>

      </main>
    </div>
  )
}

export default Banner