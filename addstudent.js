let books = [];

function addBook() {
  let bookName = document.getElementById("bookName").value.trim();

  if (bookName === "") {
    alert("Enter a book name");
    return;
  }

  books.push(bookName);
  alert("Book Added Successfully");

  document.getElementById("bookName").value = "";
  console.log(books);
}
