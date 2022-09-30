import displayBooks from './display.js';
import {Books} from '/index.js'; 
import {booksList} from '/index.js'; 

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const errorMesg = document.querySelector('.error-mesg');

  const addBook= () => {
        if (inputTitle.value !== '' && inputAuthor.value !== '') {
        const book = new Books(inputTitle.value, inputAuthor.value);
        booksList.push(book);
        localStorage.setItem('coward', JSON.stringify(booksList));
        inputTitle.value = '';
        inputAuthor.value = '';
        errorMesg.classList.remove('active');
    } else {
        errorMesg.classList.add('active');
    }
    displayBooks();
}
export default addBook;