// export default function Todo({task,isDone}){

// // task = " hello"

// if(isDone){

//     return <li>Finished : {task} </li>

// }else{

//     return <li>work on :{task} </li>
// }

// }


// export default function Todo({ task, isDone }) {
//   // task = " hello"

//   if (isDone) {
//     return <li>Finished : {task} </li>;
//   } 
//     return <li>work on :{task} </li>;
  
// }
// export default function Todo({ task, isDone }) {

 
//     return <li>{isDone?`Finished :` :`work :`} {task} </li>;
  
   
  
// }
export default function Todo({ task, isDone }) {

 
    return <li> {task} {isDone || "Do it"}</li>;
  
   
  
}




export  function Problem (){
const age = 18;

return <>


<li>{age >= 18 ? "welcome back!": "plese Log in."} </li>


</>

}