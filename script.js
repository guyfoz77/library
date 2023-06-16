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

    console.log(title.textContent);
}

const addBookButton = document.querySelector('.addBook');

addBookButton.addEventListener('submit', (e) => {
    e.preventDefault();
    library.push(new Book());
    console.log(library);
});