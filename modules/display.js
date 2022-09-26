import { booksList } from '/index.js'; // Module is evaluated!

const booksSection = document.getElementById('books-list');

  export default function displayBooks() {
    // Books.timeDisplay()
    booksList.forEach((book, i) => {
        booksSection.innerHTML += `<div class="book-detail" id="book-detail">
      <div class="one-book">
          <span class="book-title">"${book.title}"</span>
          <span>by</span>
          <span class="book-author">${book.author}</span>
      </div>
          <button type="button" onclick="Books.removeBook(${i})" class="remove-btn">Remove</button>
      </div>`;
    });
}