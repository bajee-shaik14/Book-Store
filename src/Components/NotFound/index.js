import {Link} from 'react-router-dom'
import './index.css'
import Navbar from '../NavBar'

const NotFound = () => (
  <>
    <Navbar/>
    <div className="bg-container">
    <div className="not-found-container">
      <h3 className='not-found-text'>Oops! Page Not Found</h3>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
        className="not-found"
      />
      <p className='sorry-msg'>We are sorry, the page you requested could not be found</p>
      <Link to="/" className="link">
        <button type="button" className="btn btn-primary">
          Back To Home
        </button>
      </Link>
    </div>
  </div>
  </> 
)

export default NotFound