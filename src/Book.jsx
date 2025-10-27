
import'./Book.css'



export default function Book({book}) {
  const { name, bio, author, price } = book;
  return (
    <div className='book'>
      <h4> Book Name : {name}</h4>
      <p>Price: {price}</p>
      <p>Author: {author}</p>
      <p>Bio: {bio}</p>
   
    </div>
  );
}

// export default function Book({ books }) {
  

//   return (
//     <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//       <h2>Book Name: {books.name}</h2>
//       <p>Price: {price}</p>
//       <p>Author: {author}</p>
//       <p>Bio: {bio}</p>
//     </div>
//   );
// }

// export default function Book({book}) {
//   return (
//     <div>
//       <h2>Book Name: {book.name}</h2>
//     </div>
//   );
// }



