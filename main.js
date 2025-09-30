const myLibrary = [];

let table = document.getElementById("table");

function Book(title, author, date, genre, length) {
    this.id = crypto.randomUUID;
    this.title = title;
    this.author = author;
    this.date = date;
    this.genre = genre;
    this.length = length;
}

function addBook(title, author, date, genre, length) {
    let newBook = new Book(title, author, date, genre, length);
    myLibrary.push(newBook);

    let row = table.insertRow;

    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let dateCell = row.insertCell(2);
    let genreCell = row.insertCell(3);
    let lengthCell = row.insertCell(4);

    titleCell.textContent = newBook.title;
    authorCell.textContent = newBook.author;
    dateCell.textContent = newBook.date;
    genreCell.textContent = newBook.genre;
    lengthCell.textContent = newBook.length;
}

// // Update HTML table to show all current items
// function updateTable() {
//     for (let item of myLibrary) {
        
//     }
// }