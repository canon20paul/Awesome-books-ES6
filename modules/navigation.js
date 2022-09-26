
const sectionOfBooks = document.querySelector('#books-section');
const sectionContact = document.querySelector('#section-contact');
const sectionForm = document.querySelector('#form-section');

export default function selection(id) {
    if (id === 'list') {
        sectionOfBooks.classList.add('showing');
        sectionContact.classList.remove('showing');
        sectionForm.classList.remove('showing');
    } else if (id === 'add') {
        sectionOfBooks.classList.remove('showing');
        sectionContact.classList.remove('showing');
        sectionForm.classList.add('showing');
    } else if (id === 'contact') {
        sectionOfBooks.classList.remove('showing');
        sectionContact.classList.add('showing');
        sectionForm.classList.remove('showing');
    }
}