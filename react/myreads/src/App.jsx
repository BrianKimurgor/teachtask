// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookList from './components/bookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookshelf</h1>
      </header>
      <BookList />
    </div>
  );
}

export default App;
