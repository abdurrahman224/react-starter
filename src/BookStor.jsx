
import Book from "./Book";
export default function BooksStor({books}) {
  return (
    <div>
      <h2>Books in Stock: {books.length}</h2>


      {

        books.map(book=> <Book book={book}></Book>)
      }
    </div>
  );
}
