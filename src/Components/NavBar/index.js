import {Link} from 'react-router-dom'

import './index.css'

const NavBar = () => (
  <div className="nav-bar-header">
    <Link to="/" className="link">
    <h1 className='app-title'>Book Store</h1>
    </Link>
  </div>
)

export default NavBar