function deleteBook() {
  let bookName = document.getElementById("deleteBookName").value.trim();

  let index = books.indexOf(bookName);

  if (index !== -1) {
    books.splice(index, 1);
    alert("Book Deleted Successfully");
  } else {
    alert("Book Not Found");
  }

  console.log(books);
}
