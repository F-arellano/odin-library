
let myLibrary = []
let book_counter = 0

function Book(title, author, pages, readed) {
    this.id = book_counter
    book_counter++ 

    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed

    this.info = () => {
        let text =`${this.title} by ${this.author}, ${this.pages} pages, `
        if (this.readed) {
            text += "readed."
        } else {
            text += "not readed."
        }
        return text
    }
}

function addBookToLibrary (title, author, pages, readed) {
    const book = new Book(title, author, pages, readed)
    myLibrary.push(book)
}

function deleteBookFromLibrary (id) {
    const index = myLibrary.findIndex(item => item.id == id)
    myLibrary.splice(index, 1)
}

function showLibrary () {
    const table = document.querySelector(".library-table")
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }

    for (let book of myLibrary) {
        const newRow = document.createElement("tr")

        const id = document.createElement("td")
        id.textContent = book.id

        const title = document.createElement("td")
        title.textContent = book.title
    
        const author = document.createElement("td")
        author.textContent = book.author 

        const pages = document.createElement("td")
        pages.textContent = book.pages 

        const readed = document.createElement("td")
        readed.textContent = book.readed 

        const del = document.createElement("td")
        const delButton = document.createElement("button")
        delButton.classList.add("del-button")
        delButton.setAttribute("value", book.id)
        delButton.textContent = "x"
        del.appendChild(delButton)

        newRow.appendChild(id)
        newRow.appendChild(title)
        newRow.appendChild(author)
        newRow.appendChild(pages)
        newRow.appendChild(readed)
        newRow.appendChild(del)

        table.appendChild(newRow)
    }
}

export {
    addBookToLibrary,
    deleteBookFromLibrary,
    showLibrary,
}