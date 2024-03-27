/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useState, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"

export default function Books(){

    const [ books, setBooks] = useState([])
    const [ searched, setSearched] = useState('')

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const result = await response.json();
                setBooks(result.books);
            } catch(error) {
                console.error(error);
            }
        }
        fetchBooks();
    }, []);

    useEffect(() => {
        console.log(books);
    }, [books]);
    const searchedBook = books.filter((book) => {
        return book.title.toLowerCase().includes(searched.toLowerCase());
    });

return (
    <>
    <h1>Book Selection! </h1>
    <label>Search for Book: <input type="text" value={searched} onChange={(e) => setSearched(e.target.value)}/></label><br/>
    <Link to="/register"><button>Create an Account!</button></Link>
    <Link to="/login"><button>Log In!</button></Link>
    {searchedBook.map((book) => (
                <div key={book.id}>
                    <h3>Title: {book.title}</h3>
                    <img src={book.coverimage} alt={book.title} />
                    <p>Author: {book.author}</p>
                    <p>Description: {book.description}</p>
                </div>
            ))}
    </>
)
}
