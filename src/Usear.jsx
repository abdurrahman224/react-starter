import { useEffect, useState } from "react";

export default function Usae (){

const [User , setUser] = useState([])
useEffect (()=>{

fetch('https://jsonplaceholder.typicode.com/users')

.then(res => res.json())
.then(data => setUser(data))

},[])
console.log(User.length);
return <div>

<h2>User Length : {User.length}</h2>


</div>
}