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
                  <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a>
                  <a href='https://www.facebook.com/' target="_blank" rel='noreferrer'><i class="fab fa-facebook"></i></a>
                  <a href='https://www.linkedin.com/in/sabitasitaula/' target="_blank" rel='noreferrer'><i class="fab fa-linkedin"></i></a>
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