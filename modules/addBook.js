import { Books, booksList } from './store.js';
// import displayBooks from './display.js';

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const errorMesg = document.querySelector('.error-mesg');

export const addBook = () => {
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
  window.location.reload();
};
// export default { addBook };