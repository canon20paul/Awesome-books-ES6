import './modules/addBook.js';
import addBook from './modules/addBook.js';
import displayBooks from './modules/display.js';
import selection from './modules/navigation.js';
import { DateTime } from './modules/luxon.js';

const timeDate = document.getElementById('date');
const sectionOfBooks = document.querySelector('#books-section');
const sectionContact = document.querySelector('#section-contact');
const sectionForm = document.querySelector('#form-section');
const addBtn = document.getElementById('add-btn');
const errorMesg = document.querySelector('.error-mesg');
const links = document.querySelectorAll('.nav-links');
// const removeBtn = document.querySelectorAll('.remove-btn');
export const booksList = JSON.parse(localStorage.getItem('coward')) || [];
//Main Class
export class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // displaybooks
    static displayBookss() { displayBooks(); }

    // addbook
    static addBooks() { addBook(); location.reload(); }
    // removebook
    static removeBook(index) {
        booksList.splice(index, 1);
        localStorage.setItem('coward', JSON.stringify(booksList));
        Books.displayBookss();
        location.reload();
    }
    //Display Date and Time
    static timeDisplay() {
        const clock = DateTime.now();
        timeDate.innerText = clock.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    }
    //end of Class Books
}

window.onload = Books.displayBookss();
const removeBtn = document.querySelectorAll('.remove-btn');
setInterval(Books.timeDisplay, 1000); //Digital Time Display
addBtn.addEventListener('click', () => Books.addBooks());//add book
links.forEach((link) => { link.addEventListener('click', e => selection(e.target.id)); }) // Tabed navigation
//Remove Book
removeBtn.forEach((Btn) => {
    Btn.addEventListener('click', (e) => {
        Books.removeBook(e.target.id);
    });
})