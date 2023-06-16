let library = []

function Book() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;

    console.log(read.checked);
    console.log(library);
}

const addBookButton = document.querySelector('.addBook');

addBookButton.addEventListener('submit', (e) => {
    e.preventDefault();
    library.push(new Book());
    addBooks();
});

function addBooks() {
    const bookcaseDiv = document.querySelector('.bookcase');
    const books = document.querySelectorAll('.book');
    
    books.forEach(book => {  //removes all books before re adding them (there is absolutely a better way to add books)
        book.remove(); 
    })

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
            pages.textContent = book.pages;
            pages.classList.add('pages');
        const button = document.createElement('button');
            button.textContent = 'Remove';

        if(book.read == true) {
            bookDiv.classList.add('read');
        } else bookDiv.classList.add('unread');
        
        bookDiv.append(title, author, pages, button);
        bookcaseDiv.appendChild(bookDiv);

    })
}