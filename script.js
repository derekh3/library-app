let myLibrary = [];
let libraryIndex = 0;
const booksGrid = document.querySelector('.cards-container');
const addBookButton = document.querySelector('.add-book');
const addBookModal = document.querySelector('.addBookModal');
const addBookForm = document.querySelector('.add-book-form');
const submitBookButton = document.querySelector('.addBookModal button');

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
  // let title = prompt("Title:");
  // let author = prompt("Author:");
  // let pages = prompt("Pages:");
  // let read = prompt("Read?");
  // read = read === 'true' || 'yes' ? true : false;
  // console.log(read);
  // if (read === 'false' || 'no') {
  //   read = false;
  // }
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('button');
  const remove = document.createElement('button');

  bookCard.classList.add('card')
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  read.textContent = `${book.read ? "Read" : "Not read"}`;
  remove.textContent = 'Remove';
  remove.onclick = deleteBook;
  read.onclick = toggleRead;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(read);
  bookCard.appendChild(remove);
  bookCard.setAttribute('libraryIndex', libraryIndex);
  libraryIndex++;
  booksGrid.appendChild(bookCard);
}

function toggleRead(e) {
  let thisCard2 = e.target.parentNode;
  let currentStatus = e.target.textContent;
  e.target.textContent = `${currentStatus === 'Read' ? 'Not read' : "Read"}`;
  console.log(thisCard2.getAttribute('libraryIndex'));
  myLibrary[thisCard2.getAttribute('libraryIndex')].read = currentStatus === 'Read' ? false : true;
}

function deleteBook(e) {
  let thisCard = e.target.parentNode;
  myLibrary.splice(thisCard.dataset.libraryIndex, 1);
  thisCard.remove();
  console.log(e.target.parentNode);
  libraryIndex--;
  updateCardIndices();
}

function closeAddBookModal() {
  addBookModal.classList.remove('active');
}

function addBook(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('is-read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createBookCard(newBook);
  closeAddBookModal();

}

function updateCardIndices() {
  let childCards = booksGrid.children;
  for (let i = 0; i < childCards.length; i++) {
    childCards[i].setAttribute('libraryIndex', i);
  }
}

function displayBooks() {
  for (let book of myLibrary) {
    createBookCard(book);
  }
}

addBookButton.addEventListener("click", () => {
  addBookModal.classList.add('active');
  addBookForm.reset();
});

const book1 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book1);

const book2 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book2);

const book3 = new Book('asdf', 'asdfw', 123, true);
myLibrary.push(book3);

displayBooks();

addBookForm.onsubmit = addBook;