import { deleteBookFromLibrary, showLibrary, addBookToLibrary } from "./library.js"


function setDialog () {
    const addButton = document.querySelector(".add-button")
    const closeButton = document.querySelector(".close-dialog")
    const submitButton = document.querySelector(".submit-dialog")
    const dialog = document.querySelector("dialog")
    
    addButton.addEventListener("click", () => {
        dialog.showModal()
    })

    closeButton.addEventListener("click", () => {
        dialog.close()
    })

    submitButton.addEventListener("click", () => {
        const title = document.querySelector("#title").value
        const author = document.querySelector("#author").value
        const pages = document.querySelector("#pages").value
        const readed = document.querySelector("#readed").value

        addBookToLibrary(title, author, pages, readed)
        showLibrary()
        setDelButtons()
        dialog.close()
    })
}

function setDelButtons () {
    const delButtons = document.querySelectorAll(".del-button")

    for (let i=0; i< delButtons.length; i++) {
        const delButton = delButtons[i]
        delButton.addEventListener("click", () => {
            deleteBookFromLibrary(delButton.getAttribute("value"))
            showLibrary()
            setDelButtons()
        })
    }
}

export {
    setDialog,
    setDelButtons,
}