
import { booksList } from '/index.js'; // Module is evaluated!

const booksSection = document.getElementById('books-list');
export default function displayBooks() {
  booksSection.innerHTML = ''
  // Books.timeDisplay()
  booksList.forEach((book, i) => {
    booksSection.innerHTML += `<div class="book-detail" id="book-detail">
      <div class="one-book">
          <span class="book-title">"${book.title}"</span>
          <span>by</span>
          <span class="book-author">${book.author}</span>
      </div>
          <button type="button" class="remove-btn" id="${i}">Remove</button>
      </div>`;
  });
}