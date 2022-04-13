import React, { useState, useEffect } from 'react'
import axios from 'axios'
import covidapp from '../../images/covidapp.PNG'

const Project = () => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://api.github.com/users/sabitasitaula/repos?per_page=6")
      .then(res => {
        setIsLoading(false);
        setProject(res.data)
      })
  },[])
  return (
      <>
          {/* <div className="card" style={{width: "18rem"}}>
            <img src={covidapp} class="card-img-top" alt="covidapp" />
            <div class="card-body">
                  <h5 class="card-title">{project.name}</h5>
                  <p class="card-text">{project.pushed_at}</p>
                  <a href={project.html_url} class="btn btn-primary" target="_blank" rel='noreferrer'>Goto Code</a>
            </div>
          </div> */}
       {isLoading && <div class="spinner-border text-primary " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>}   
      { !isLoading &&
        project.map(myproject => {
          return (
            <div className="card" style={{width: "18rem"}}>
            <img src={covidapp} class="card-img-top" alt="covidapp" />
            <div class="card-body">
                  <h5 class="card-title">{myproject.name}</h5>
                  <p class="card-text">{myproject.pushed_at}</p>
                  <a href={myproject.html_url} class="btn btn-primary" target="_blank" rel='noreferrer'>Goto Code</a>
            </div>
          </div>
          )
        })
      }
    </>
  )
}

export default Project