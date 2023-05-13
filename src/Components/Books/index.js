import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom/cjs/react-router-dom'

class Courses extends Component {
  state = {specificBook: []}

  componentDidMount() {
    this.getBookDetails()
  }

  getBookDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://example-data.draftbit.com/books/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      description: data.description,
      id: data.id,
      title: data.title,
      }
      this.setState({specificBook: updatedData})
  }

 
  renderBookDetails = () => {
    const {specificBook} = this.state
    const {title, imageUrl, description} = specificBook

    return (
      <div className="card">
        <Link to='/' className="back-button mt-0 mb-3"><button className="btn btn-primary">Back</button></Link>
        <div className="inner-card">
          <div>
            <img src={imageUrl} alt={title} className="image_urls" />
          </div>
          <div>
            <h1 className='book-title'><span style={{fontWeight: "bold"}}>Title: </span>{title}</h1>
            <p className='description'><span style={{fontWeight: 'bolder'}}>Story: </span>{description}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavBar/>        
        {this.renderBookDetails()}
      </div>
    )
  }
}

export default Courses