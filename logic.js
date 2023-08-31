let myLibrary = [];

function Book(author,title,pages,readStatus) {
    this.author = author
    this.title = title 
    this.pages = pages 
    this.readStatus = readStatus
}

function addBooktoLibrary(book) {
    myLibrary.push(book)
}

document.querySelector('.new').addEventListener('click', ()=>{
    document.getElementById('add-dialog').showModal()
})

document.getElementById('cancel').addEventListener('click', ()=>{
    document.getElementById('add-dialog').close()
}) 


//Add book to display container
function displayBook(bookInfo){
    const bookElement = document.createElement('div');
    const buttonDiv = document.createElement('div')
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove'
    bookElement.innerHTML = `Title: ${bookInfo.title}<br> Author: ${bookInfo.author}<br> Pages: ${bookInfo.pages}<br> Status: ${bookInfo.readStatus}`;
    buttonDiv.appendChild(removeButton)
    buttonDiv.classList.add('buttonDiv')
    bookElement.appendChild(buttonDiv)
    bookElement.classList.add('book')
    removeButton.classList.add('remove')
    document.querySelector('.card-container').appendChild(bookElement);
}

//Reset the dialog after clicking submit
function resetDialog(){
    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    readStatus = document.getElementById('status')
    readStatus.value= ""
}

//Fetching book info from submit field
function confirmLibraryBook(Event){
    let bookInfo = []
    author = document.getElementById("author")
    title = document.getElementById("title")
    pages = document.getElementById("pages")
    readStatus = document.getElementById('status')
    readStatusInsert = readStatus.options[readStatus.selectedIndex]

    bookInfo['author'] = author.value
    bookInfo['title'] = title.value
    bookInfo['pages'] = pages.value
    bookInfo['readStatusInsert'] = readStatusInsert.text
    let newBook = new Book(bookInfo.author, bookInfo.title, bookInfo.pages, bookInfo.readStatusInsert)
    addBooktoLibrary(newBook)
    Event.preventDefault()
    document.getElementById('add-dialog').close()
    resetDialog()
    displayBook(newBook)
}

//Initialize logic for Confirm button
function processInfo(){
    document.getElementById("confirmBtn").addEventListener('click', confirmLibraryBook)
    document.getElementById('confirmBtn').addEventListener('click', confirmLibraryBook)
}

function removeButton(){
    let removeButtons = document.getElementsByClassName('remove')
    for (let i = 0; i < removeButtons.length; i++) {
        let button = removeButtons[i];
        button.addEventListener('click', () => {
            button.parentElement.parentElement.remove();
            myLibrary.splice(i,1)
        });
    }
}

processInfo()
document.addEventListener('click', removeButton)





