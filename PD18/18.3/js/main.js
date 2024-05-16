const book = {
    title: "Animal Farm",
    author: "George Orwell",
    pageCount: 82
};

function printBook(book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Page Count: " + book.pageCount);
}

printBook(book);