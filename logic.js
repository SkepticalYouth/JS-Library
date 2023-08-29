const myLibrary = [];

function Book(author,title,pages,readStatus) {
    this.author = author
    this.title = title 
    this.pages = pages 
    this.readStatus = readStatus
}

function addBooktoLibrary(book) {
    myLibrary.push(book)
}

const newBook1 = new Book('William Rehnquist', 'The Supreme Court',336,'Read')
const newBook2 = new Book('Charles Dickens', 'David Copperfield',1083,'Read')
myLibrary.push(newBook1, newBook2)

myLibrary.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `Title: ${book.title}<br> Author: ${book.author}<br> Pages: ${book.pages}<br> Status: ${book.readStatus}`;
    bookElement.classList.add('book')
    document.getElementsByClassName('card-container')[0].appendChild(bookElement);
});

document.querySelector('.new').addEventListener('click', ()=>{
    document.getElementById('add-dialog').showModal()
})

document.getElementById('cancel').addEventListener('click', ()=>{
    document.getElementById('add-dialog').close()
}) 