import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Projects.css'

function Projects() {
  return (
    <>
        <div className='project-header'>
            <Navbar />
        </div>
        <div className="project-container">
            <div className="project-row">
                <div className="box"></div>
                <div></div>
            </div>
            <div className="project-row">
                <div></div>
                <div className="box"></div>
            </div>
            <div className="project-row">
                <div className="box"></div>
                <div></div>
            </div>
        </div>
        <div className='project-footer'>
                <Footer />
        </div>
    </>
  )
}

export default Projects
