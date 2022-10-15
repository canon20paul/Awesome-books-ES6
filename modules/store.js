// import addBook from './addBook.js';

import { DateTime } from './luxon.js';

const booksList = JSON.parse(localStorage.getItem('coward')) || [];
const timeDate = document.getElementById('date');
// Main Class
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // displaybooks
  // static displayBookss() { displayBooks(); }

  // addbook
  // static addBooks() { addBook(); window.location.reload(); }

  // removebook
  static removeBook(index) {
    booksList.splice(index, 1);
    localStorage.setItem('coward', JSON.stringify(booksList));
  }

  // Display Date and Time
  static timeDisplay() {
    const clock = DateTime.now();
    timeDate.innerText = clock.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }
  // end of Class Books
}
export { Books, booksList };