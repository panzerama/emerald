let books = [
  { title:'Moby Dick', price:20 },
  { title:'Tom Sawyer', price:12 },
  { title:'War & Peace', price:25 }
];

exports.getBook = (title) => {
  // return a book by title
  return this.books.find((book) => {
    return book.title === title;
  });
}

exports.byPriceAsc = () => {
  // return a sorted list of books
  return this.books.sort((a, b) => {
    return a.price - b.price;
  });
}