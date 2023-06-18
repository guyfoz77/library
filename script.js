// let examplebook = {
//     title: 'An Example Book',
//     author: 'Example RR Author',
//     pages: 552,
//     read: true,    
// }
// let examplebook2 = {
//     title: 'Another Example',
//     author: 'Example C Writer',
//     pages: 224,
//     read: false,    
// }

let library = [];

library[0] = new Book('an example book',
'an example author',
552,
true);
library [1] = new Book('Another example',
'Example C Writer',
224,
false);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readToggle = function () {
    // this.read = !this.read;
    console.log('hello');
    console.log(this);
}

addBooks();

const addBookButton = document.querySelector('.addBook');
addBookButton.addEventListener('submit', (e) => {
    e.preventDefault();
    library.push(new Book(
        document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#read').checked
    ));
    addBooks();
});

function initDeleteButton() {
    const deleteButton = document.querySelectorAll('.book .delete');
    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            library.splice(+button.dataset.index, 1);
            addBooks();
        })
    });
}
function initToggleButton() {
    const toggleButton = document.querySelectorAll('.toggle');
    toggleButton.forEach(toggleButton => {
        toggleButton.addEventListener('click', library[+toggleButton.dataset.index].readToggle);
    })
}

function addBooks() {
    const bookcaseDiv = document.querySelector('.bookcase');
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {  //removes all books before re adding them (there is absolutely a better way to add books)
        book.remove(); 
    })

    let i = 0;
    library.forEach(book => { //adds all the books onto the shelf
        
        const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
        const title = document.createElement('h3');
            title.textContent = book.title;
            title.classList.add('title');
        const author = document.createElement('h4');
            author.textContent = book.author;
            author.classList.add('author');
        const pages = document.createElement('p');
            pages.textContent = `${book.pages} pages.`;
            pages.classList.add('pages');
        const button = document.createElement('button');
            button.textContent = 'Remove';
            button.classList.add('delete');
            button.dataset.index = i;
        const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle Read';
            toggleButton.classList.add('toggle');
            toggleButton.dataset.index = i;
            i++

        if(book.read == true) {
            bookDiv.classList.add('read');
        } else bookDiv.classList.add('unread');
        
        bookDiv.append(title, author, pages, button, toggleButton);
        bookcaseDiv.appendChild(bookDiv);

    })
    
    initDeleteButton();
    initToggleButton();

    const form = document.querySelector('form');
    form.reset();
}

