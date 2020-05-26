let myLibrary = [];

function Book(author = null, title = null, publisher = null , numberOfPages = null, year = null) {
    this.author = author;
    this.title = title;
    this.publisher = publisher;
    this.numberOfPages = numberOfPages;
    this.year = year;
}

function addBookToTheLibrary(author = null, title = null, publisher = null , numberOfPages = null, year = null){
    book = new Book(author,title,publisher,numberOfPages,year);
    myLibrary.push(book);
}