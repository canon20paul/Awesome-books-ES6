import './modules/addBook.js' ; // Module is evaluated!
import  addBook  from './modules/addBook.js';
import  displayBooks  from './modules/display.js';
import selection  from './modules/navigation.js';


// const booksSection = document.getElementById('books-list');
const timeDate = document.getElementById('date');
const sectionOfBooks = document.querySelector('#books-section');
const sectionContact = document.querySelector('#section-contact');
const sectionForm = document.querySelector('#form-section');
// const inputTitle = document.getElementById('title');
// const inputAuthor = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const errorMesg = document.querySelector('.error-mesg');
const links = document.querySelectorAll('.nav-links');
export const booksList = JSON.parse(localStorage.getItem('coward')) || [];
console.log(sectionOfBooks);
console.log(sectionContact);
console.log(sectionForm);

export class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // displaybooks
    static displayBookss() { Books.timeDisplay(); displayBooks()}
    //     booksList.forEach((book, i) => {
    //         booksSection.innerHTML += `<div class="book-detail" id="book-detail">
    //   <div class="one-book">
    //       <span class="book-title">"${book.title}"</span>
    //       <span>by</span>
    //       <span class="book-author">${book.author}</span>
    //   </div>
    //       <button type="button" onclick="Books.removeBook(${i})" class="remove-btn">Remove</button>
    //   </div>`;
    //     });
    // }
    // addbook
    static addBooks() {       addBook();}
        // const book = new Books(inputTitle.value, inputAuthor.value);
        // if (inputTitle.value !== '' && inputAuthor.value !== '') {
        //     booksList.push(book);
        //     localStorage.setItem('coward', JSON.stringify(booksList));
        //     errorMesg.classList.remove('active');
        // } else {
        //     errorMesg.classList.add('active');
        // }
    
    // removebook

    removeBook(index) {
        booksList.splice(index, 1);
        booksSection.innerHTML = '';
        localStorage.setItem('coward', JSON.stringify(booksList));
        Books.displayBookss();
    }

    //Display Date and Time
    static timeDisplay() {
        let date = new Date();
        let n = date.toDateString();
        let time = date.toLocaleTimeString();
        timeDate.innerText = n + '     ' + time;
    }
}

window.onload = Books.displayBookss();
setInterval(Books.timeDisplay, 1000);
addBtn.addEventListener('click', () => {
    booksSection.innerHTML = '';
    Books.addBook();
    // inputTitle.value = '';
    // inputAuthor.value = '';
});

// navigation

links.forEach((link) => { link.addEventListener('click', e => selection(e.target.id));})