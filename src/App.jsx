import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo, { Problem } from "./Todo";
import Actors from "./Actors";
import Singer from "./Singers";
import BooksStor from "./bookStor";
import { Counter } from "./Counter";
import Usear from "./Usear";

function App() {
  

const books = [
  { 
    name: "Riyad-us-Saliheen", 
    price: 450, 
    author: "Imam Nawawi",
    bio: "A comprehensive compilation of authentic Hadiths covering morals, ethics, and Islamic manners."
  },
  { 
    name: "Riyad-us-Saliheen", 
    price: 450, 
    author: "Imam Nawawi",
    bio: "A comprehensive compilation of authentic Hadiths covering morals, ethics, and Islamic manners."
  },
  { 
    name: "Forty Hadith", 
    price: 300, 
    author: "Imam An-Nawawi",
    bio: "A collection of forty essential Hadiths chosen for their guidance in daily life."
  },
  { 
    name: "The Sealed Nectar", 
    price: 500, 
    author: "Safi-ur-Rahman Mubarakpuri",
    bio: "A detailed biography of Prophet Muhammad (PBUH), winner of Islamic literary awards."
  },
  { 
    name: "In the Footsteps of the Prophet", 
    price: 600, 
    author: "Tariq Ramadan",
    bio: "Explores the life of Prophet Muhammad (PBUH) and draws lessons for contemporary Muslims."
  },
  { 
    name: "Purification of the Heart", 
    price: 350, 
    author: "Hamza Yusuf",
    bio: "An insightful book on inner purification and removing spiritual diseases from the heart."
  }
];
 const [showBooks, setShowBooks] = useState(false);
function handleClick() {

setShowBooks(pr  =>!pr );
console.log("jsdfsdfsd");

  
}
  const addFunction = (num)=>{
    alert( num+5 )
  }
  return (
    <>
    <Usear></Usear>  
<Counter></Counter>
{/* <button onClick={handleClick}>Click me</button> */}
{/* <BooksStor books={books} />; */}

{/* {showBooks && <BooksStor books={books} />}
       

<button onClick={()=>addFunction(56)} >Cli</button> */}

    </>
  );
}

export default App;
