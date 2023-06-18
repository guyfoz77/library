# library

## Functionality

The bookshelf comes pre loaded with two example books. Add more books by completing the form and submitting. Books can be removed simply by using the delete button, and the read status can easily be toggled too.

## Under the bonnet
### The Library
`library` is an array that stores each book object.

### Basic functions:
`addBooks` first delete all `.book` objects in the document, leaving an empty bookshelf. It then loops through the `library` array, rebuilding each book one at a time and adds them back onto the bookshelf. It needs to be done this way, as the delete and book toggle buttons require each book to have a `data-index` value equal to the books position in the `library` array. Deleting books will mean each book item on the shelf does not align with the correct index in `library`.

`initDeleteButton` will add event listeners to each delete button, which attaches a function which will look at the buttons `data-index` value. This value will be equal to the books position in the `library` array and will then splice the book from the library, before calling `addbooks` to rebuild the new library.

`Book.prototype.readToggle` is a function which inverts the books 'read' status of the book. It then calls the `addBooks` function to rebuild the library with the books read status updated. It is called when the user clicks the 'toggleRead' button.

### Adding books:
The user can add more books to the library by filling out the form on the page. When submitted, the values are passed to the `Book` constructor which builds a new book object and adds it to the `library` array, before calling the `addBooks` function to rebuild the library with the new book added.