// src/components/BookList.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { getAll } from '../api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then(data => {
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
