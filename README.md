# Book-Store-App

This App is the simple Book Store App that displays a list of books and allows users to add new books to the list.

SET UP INSTRUCTIONS:
* Start up the app using "npm start".

The App has two screens:
1. A list screen that displays the list of books fetched from the REST API 
2. A form screen that allows the users to add a new book to the list.

FUNCTIONALITY:

*** When the app is opened initially:

* List of books fetched from the REST API is displayed indication the book image,title and author.
* "Add Book" button is available at the right top corner of the screen
* The list of books displayed in the screen are clickable. Upon clicking any book, the page routes and corresponding
  book details(title and story/description) are displayed. "Back" button is available at the left corner in this page so that the           user can navigate back to the home screen.
         
*** When "Add Book" button is clicked:

* Form is displayed on the screen where user can input new book title and author.
* Both the input fields are mandatory to add the book to the list. If any one of the input fields is found empty,
  an alert popup is displayed saying "Enter both the fields"
* On giving both the input fields and clicking the "Add" button provided, 
  an alert popup is displayed saying "Book added successfully!" and finally new book details given in the form 
  is displayed next to the books previously fetched.
         
*** Image Url used: 

*  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQPbgVBlKHEugwwGPdIKM_kUzx7PlmD7hKOABqWmjFg&usqp=CAU&ec=48665699

*** REST API used:

* https://example-data.draftbit.com/books?_limit=20  
* As the limit is 20 in the code implementation, first 20 books fron the list is rendered initially when the app opened.

