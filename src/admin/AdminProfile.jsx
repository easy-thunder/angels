import { useEffect, useState } from "react"
import Person from "./Person"

function AdminProfile(){

const [people, setPeople] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/People')
    .then(r=>r.json())
    .then(setPeople)
},[])


    return(
        <div>
            {people.map(person=><Person person={person} />)}
        </div>
    )
    
}
export default AdminProfile