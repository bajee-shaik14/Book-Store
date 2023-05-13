import { Component } from "react";

import "./index.css";
import NavBar from "../NavBar";
import ListView from "../ListView";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormField from "../FormField";

const booksListUrl = "https://example-data.draftbit.com/books?_limit=20";

class Home extends Component {
  state = { booksList: [], homeScreen: true};

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch(booksListUrl);
    const data = await response.json();

    const formattedData = data.map((eachBook) => ({
      id: eachBook.id,
      title: eachBook.title,
      authors: eachBook.authors,
      description: eachBook.description,
      imageUrl: eachBook.image_url,
    }));

    this.setState({ booksList: formattedData });
  };

  getNewBook = (newBookDetails) => { 
    const {booksList} = this.state

    this.setState((prev) => ({homeScreen: !prev.homeScreen}))
    this.setState({booksList: [...booksList,newBookDetails]})
  }
  
  addBook = () => {
    this.setState((prev) => ({homeScreen: !prev.homeScreen}))
  }

  renderHomePage = () => {
    const { booksList } = this.state;

    return (
      <div className="head-contain">
          <div className="title-bar">
            <Link to='/' className="link"><h1 className="heading">Home</h1></Link>
            <button className="btn btn-outline-success" onClick={this.addBook}>Add Book</button>
          </div>
          <ul className="item-details">
            {booksList.map((eachItem) => (
              <ListView itemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
    )
  }

  render() {
    const { homeScreen } = this.state;

    return (
      <>
      <NavBar />
      {homeScreen ? (this.renderHomePage()) : (<FormField getData={this.getNewBook}/>)}
      </>
    )
  }
}

export default Home