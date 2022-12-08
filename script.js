let myLibrary = [];
const booksGrid = document.querySelector('.cards-container');
const addBookButton = document.querySelector('.add-book');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read'}`;
  }
}

function addBookToLibrary() {
  let title = prompt("Title:");
  let author = prompt("Author:");
  let pages = prompt("Pages:");
  let read = prompt("Read?");
  // read = read === 'true' || 'yes' ? true : false;
  console.log(read);
  if (read === 'false' || 'no') {
    read = false;
  }
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');

  bookCard.classList.add('card')
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  read.textContent = `${book.read ? "Read" : "Not read"}`;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  booksGrid.appendChild(bookCard);
}

function displayBooks() {
  for (let book of myLibrary) {
    createBookCard(book);
  }
}

addBookButton.addEventListener("click", addBookToLibrary);

const book1 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book1);

const book2 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book2);

const book3 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book3);

displayBooks();