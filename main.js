let myLibrary = [];

const table = document.getElementById("table");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");

function Book(title, author, date, genre, length) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.date = date;
    this.genre = genre;
    this.length = length;
}

function addBook(title, author, date, genre, length) {
    let newBook = new Book(title, author, date, genre, length);
    myLibrary.push(newBook);
    updatePage();
}

function updatePage() {
    // Reset table
    table.innerHTML = 
    ` <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Date of Publication</th>
        <th>Genre</th>
        <th>Length</th>
        <th>Edit</th>            
    </tr>`

    for (const book of myLibrary) {
        let row = table.insertRow();

        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let dateCell = row.insertCell(2);
        let genreCell = row.insertCell(3);
        let lengthCell = row.insertCell(4);

        let rmOpt = row.insertCell(5);

        const rmBtn = document.createElement("button");
        rmBtn.type = "button";
        rmBtn.textContent = "Delete";
        rmBtn.dataset.id = book.id;

        rmOpt.appendChild(rmBtn);

        rmBtn.addEventListener ("click", () => {
            myLibrary = myLibrary.filter(x => x.id !== rmBtn.dataset.id);
            updatePage();
        });

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        dateCell.textContent = book.date;
        genreCell.textContent = book.genre;
        lengthCell.textContent = book.length;
    }
}

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

submitBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addBook(form.title.value, form.author.value, form.date.value, form.genre.value, form.length.value);

    // clear form
    form.reset();
});