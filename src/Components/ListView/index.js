import {Link} from 'react-router-dom'
import './index.css'

const ListView = props => {
  const {itemDetails} = props
  const {authors, imageUrl, id, title} = itemDetails

  return (
    <Link to={`/books/${id}`} className="link">
      <li className="tech-list">
        <img src={imageUrl} alt={title} className="tech-images" />
        <p className="title">Title: {title}</p>
        <p className="authors">Authors: {authors}</p>
      </li>
    </Link>
  )
}

export default ListView 