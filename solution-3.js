import { Book } from './solution-1.js';
import { Library } from './solution-2.js';

// Create a library instance
const library = new Library();

// Create new book instances
const book1 = new Book("Book One", "Author A", Book.generateISBN(), 3);
const book2 = new Book("Book Two", "Author B", Book.generateISBN(), 5);

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// Display all books
console.log("All books:");
library.displayBooks();

// Search books by title
console.log("Search results for 'One':");
console.log(library.searchBooks("One"));

// Remove a book and display remaining books
library.removeBook(book1.getISBN());
console.log("Books after removal:");
library.displayBooks();