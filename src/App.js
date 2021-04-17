
import './App.css';
import { useState } from "react";

const bookDB = {
  SelfHelp: [
    { name: "Rich Dad, Poor ", rating: "[5/5]" },
    { name: "Factfulness", rating: "[3.5/5]" },
    { name: "Atomic Habits", rating: "[4.1/5]" }
  ],
  Fiction: [
    { name: "The Alchemist", rating: "[4.5/5]" },
    { name: "Pride and Prejudice", rating: "[3/5]" },
    { name: "The Fault in Our Stars", rating: "[4/5]" }
  ],
  Programming: [
    { name: "The Pragmatic Programmer", rating: "[4.2/5]" },
    { name: "JavaScript The Good Parts", rating: "[4/5]" },
    { name: "Clean Code", rating: "[4.5/5]" }
  ],
  Business: [
    { name: "Zero To One", rating: "[4.2/5]" },
    { name: "Rich Dad Poor Dad", rating: "[4.1/5]" },
    { name: "The 100$ StartUp", rating: "[3.9/5]" },
    { name: "The 4-Hour Workweek", rating: "[4.6/5]" }
  ]
};

export default function App() {
  const [selectedBook, setBook] = useState("Fiction");
  function bookClickHandler(book) {
    setBook(book);
  }
  return (
    <div className="App">
      <h1> 📚 Book Villa 📚 </h1>
      <h4>
        🔖CheckOut my Recommendation of Books by Selecting based on your need
      </h4>

      <div>
        {Object.keys(bookDB).map((book) => (
          <button onClick={() => bookClickHandler(book)} className="button">
            {book}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {bookDB[selectedBook].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #000000",
                width: "45%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "#FFFFFF",
                backgroundColor: "#3b82f6"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
