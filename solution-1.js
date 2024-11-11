// Book class with private isbn and validation
class Book {
    #isbn;
    constructor(title, author, isbn, availableCopies) {
      this.title = title;
      this.author = author;
      this.#isbn = isbn;
      this.availableCopies = availableCopies;
      this.#validateISBN();
    }
  
    // Getter and Setter for availableCopies
    get availableCopies() {
      return this._availableCopies;
    }
  
    set availableCopies(copies) {
      if (copies >= 0) {
        this._availableCopies = copies;
      } else {
        throw new Error("Available copies cannot be negative");
      }
    }
  
    // Private method to validate ISBN
    #validateISBN() {
      if (!/^\d{3}-\d{10}$/.test(this.#isbn)) {
        throw new Error("Invalid ISBN format");
      }
    }
  
    // Static method to generate a random ISBN
    static generateISBN() {
      return 978-${Math.floor(1000000000 + Math.random() * 9000000000)};
    }
  
    // Getter for ISBN
    getISBN() {
      return this.#isbn;
    }
  }
  
  export { Book };