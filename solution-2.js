import { Book } from './solution-1.js';

class Library {
  constructor() {
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to remove a book by ISBN
  removeBook(isbn) {
    this.books = this.books.filter(book => book.getISBN() !== isbn);
  }

  // Method to search books by title or author
  searchBooks(query) {
    return this.books.filter(
      book => book.title.includes(query) || book.author.includes(query)
    );
  }

  // Method to display all books
  displayBooks() {
    this.books.forEach(book =>
      console.log(Title: ${book.title}, Author: ${book.author}, ISBN: ${book.getISBN()}, Available Copies: ${book.availableCopies})
    );
  }
}

export { Library };