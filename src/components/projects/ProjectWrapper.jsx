import React from 'react'
import Project from './Project'
import './Project.css'
// import covidapp from '../../images/covidapp.PNG'
// import dlms from '../../images/dlms.PNG'
// import notes from '../../images/notes.PNG'


const ProjectWrapper = () => {
  return (
      <div>
        <section id="projects">
            <h1>My Projects</h1>
            <div class="myproject">
                <Project />
                  {/* <Project img={covidapp} title="Covid App" desc="The CovidApp helps identify
                people exposed to coronavirus in India. This app gives us information about total confirmed cases, total recovered, total
                deaths and total active cases till date in India" />
                  <Project img={dlms} title="Digital Library" desc=" Digital Library Management System is a web based library management system where users can view and download books. Users can get access to the system by login in to the System." />
                  <Project img={notes} title="Notes" desc="This is a small web based app written in React Js. This web app record the note written by user. This web app is developed using Material UI." /> */}
          
            </div>
        </section>
    </div>
  )
}

export default ProjectWrapper