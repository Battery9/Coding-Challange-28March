const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  ];
  
  function getBookTitles(books, callback) {
    const bookTitles = books.map((book) => book.title);
    bookTitles.sort();
    callback(bookTitles);
  }
  
  function logBookTitles(bookTitles) {
    console.log(bookTitles);
  }
  
  getBookTitles(books, logBookTitles);  