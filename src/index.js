import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./Event.js";

import "./index.css";
import { books } from "./books.js";
import Book from "./Book";

const BookList = () => {
    const getBook = (id) => {
        console.log(books.find((book) => book.id === id));
        return books.find((book) => book.id === id);
    };
    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className="booklist">
                {books.map((book, index) => {
                    const { id } = book;
                    return (
                        <Book
                            {...book}
                            key={id}
                            getBook={getBook}
                            number={index}
                        />
                    );
                })}
            </section>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <BookList />
    </StrictMode>
);
