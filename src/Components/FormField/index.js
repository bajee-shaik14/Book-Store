import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './index.css'

const FormField = (props) => {
  const {getData} = props 
  const [inputTitle,setInputTitle] = useState('')
  const [inputAuthor,setInputAuthor] = useState('')

  const inputtingTitle = (event) => {
    setInputTitle(event.target.value)
  }

  const onAddingNewBook = (event) => {
    event.preventDefault()

    if(inputAuthor === '' || inputTitle === '') {
      alert("Enter both the required details")
    }
    else if(inputAuthor !== '' && inputTitle !== '') {
      const bookDetails = {
        id: uuid(),
        title: inputTitle,
        authors: inputAuthor,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQPbgVBlKHEugwwGPdIKM_kUzx7PlmD7hKOABqWmjFg&usqp=CAU&ec=48665699"
      }
      alert("New book added successfully !")
      getData(bookDetails)
      setInputTitle('')
      setInputAuthor('')
    }
  }

    return (
        <>
        <div className='form-container pt-5'>
        <h1 className='pt-2'>Add book to your book store</h1>
        <form className='form-card mt-3' onSubmit={onAddingNewBook}>
          <label className='form-controls mb-2 title-book' htmlFor='title'>Title</label>
          <input className='form-controls mb-4' type="text" id="title" value={inputTitle} placeholder='Enter Title' onChange={inputtingTitle} />
          
          <label className='form-controls mb-2 book-author' htmlFor='author'>Author</label>
          <input className='form-controls mb-2 input-style' id="author" type="text" value={inputAuthor} placeholder='Enter Author' onChange={(e) => setInputAuthor(e.target.value)}/>
        
          <button className="btn btn-outline-success button" type='submit'>Add</button>
            
        </form>
        </div>
      </>
      ) 
    }
  

export default FormField