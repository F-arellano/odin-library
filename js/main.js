import { setDialog, setButtons } from "./event-handlers.js"
import { addBookToLibrary, showLibrary } from "./library.js"

addBookToLibrary("the hobbit", "J. R. R. Tolkien", 295, true)
addBookToLibrary("Game Of Thrones", "G. R. Martin", 793, true)
addBookToLibrary("Crime & Punishment", "F. Dostoievski", 648, false)
addBookToLibrary("Siddartha", "H. Hesse", 204, true)

showLibrary()
setDialog()
setButtons()
