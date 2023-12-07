const myLibrary = [];
const bookDisplay = document.getElementById('book-display-section');
let IdCount = 1;

function Book(title,author,pages,read,bookID) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    if (this.read)
        this.readMessage = "Readed";
    else
        this.readMessage = "Not read yet";
    this.info = () => {
        console.log(`${title} by ${author}, 
        ${pages} pages,
        ${readMessage}`);
    }
    this.bookID = bookID;
}

function clearLabels() {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";

}

function addBook() {
    removeAllChildNodes(bookDisplay);
    const getItem = (id) => {
        return document.getElementById(id).value;
    }

    myLibrary.push(new Book(
        getItem('title'),
        getItem('author'),
        getItem('pages'),
        document.getElementById('read').checked,
        IdCount
    ));
    
    myLibrary.forEach(displayBooks);
    IdCount++;
    clearLabels();
}

function removeBook() {
    removeAllChildNodes(bookDisplay);
    myLibrary.forEach((book,position) => {
        if (book.bookID == this.id)
            myLibrary.splice(position,1);
    });
    console.log(this);
    myLibrary.forEach(displayBooks);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createBookCard(book) {
    const bookCard = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const page = document.createElement('p');
    const readStatusButton = document.createElement('readStatusButton');
    const deleteButton = document.createElement('button');
    

    bookCard.setAttribute("class", "book-card");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.setAttribute("id", book.bookID);

    deleteButton.addEventListener("click", removeBook);

    
    title.innerHTML = `Title: ${book.title}`;
    author.innerHTML = `Author: ${book.author}`;
    page.innerHTML = `Pages: ${book.pages}`;
    deleteButton.innerHTML = `Remove Book (${deleteButton.id})`;
    readStatusButton.innerHTML = "Read";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(page);
    bookCard.appendChild(deleteButton);

    return bookCard;
}

function displayBooks(book) {
    bookDisplay.appendChild(createBookCard(book));
}

