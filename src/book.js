// We can export objects
console.log("this shouldn't execute until the import!");

let books = [
  { title:'Moby Dick', price:20 },
  { title:'Tom Sawyer', price:12 },
  { title:'War & Peace', price:25 }
];

// We can export functions
export const getBook = (title) => {
  // return a book by title
  return books.find((book) => {
    return book.title === title;
  });
}

const byPriceAsc = () => {
  // return a sorted list of books
  return this.books.sort((a, b) => {
    return a.price - b.price;
  });
}

const getPrice = (title) => {
  return this.books.find((book) => {
    return book.price;
  })
}

// We can export multiple things at the same time.
// export { byPriceAsc, getPrice }