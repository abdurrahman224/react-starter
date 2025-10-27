export default function Singers({singer}){

return (


    <div>
        <h4> Singer :{singer.name} </h4>
        <p > Age :{singer.age} </p>
        <p >City :{singer.city} </p>
        <p>Bio : {singer.bio} </p>
    </div>
)


}