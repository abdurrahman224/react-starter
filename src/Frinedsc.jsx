import { useEffect, useState } from 'react'
import './Frinedsc.css'
import Frined from './Frined'
export default function Frinedsc (){
const [ Frineds , setFrineds] = useState([])

useEffect (()=>{

fetch('https://jsonplaceholder.typicode.com/users')

.then (res => res.json())
.then(data =>setFrineds(data))



},[])
console.log(Frineds);


return (


    <div>
    
    <h3>Frineds :{Frineds.length}</h3>
    {
        Frineds.map(frined =><Frined frined = {frined}> </Frined>)
    }
    
    </div>
)


}