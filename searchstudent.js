function searchBook() {
  let bookName = document.getElementById("searchBookName").value.trim();

  if (books.includes(bookName)) {
    alert("Book Found: " + bookName);
  } else {
    alert("Book Not Found");
  }
}
