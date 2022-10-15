import { selection } from './modules/navigation.js';
import { Books } from './modules/store.js';
import { addBook } from './modules/addBook.js';
import { displayBooks } from './modules/display.js';

// const sectionOfBooks = document.querySelector('#books-section');
// const sectionContact = document.querySelector('#section-contact');
// const sectionForm = document.querySelector('#form-section');
const addBtn = document.getElementById('add-btn');
// const errorMesg = document.querySelector('.error-mesg');

// const removeBtn = document.querySelectorAll('.remove-btn');

window.onload = displayBooks();
const removeBtn = document.querySelectorAll('.remove-btn');
setInterval(Books.timeDisplay, 1000); // Digital Time Display
addBtn.addEventListener('click', () => { addBook(); displayBooks(); }); // add book
const links = document.querySelectorAll('.nav-links');
links.forEach((link) => { link.addEventListener('click', (e) => selection(e.target.id)); }); // Tabed navigation
// Remove Book
removeBtn.forEach((Btn) => {
  Btn.addEventListener('click', (e) => {
    Books.removeBook(e.target.id);
    window.location.reload();
  });
});
