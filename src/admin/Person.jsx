import { useState } from "react"
// import Cart from "../noUserInfo/Cart"
import Note from "./Note"

function Person({person}){

    const [note, setNote] = useState([])

function handleNewNote(e){
    e.preventDefault()

setNote([...note, e.target.note.value])


    fetch(`http://localhost:3000/People/${person.id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({notes:[...note, e.target.note.value]})
    })
}


return(
    <div>
        <h4>{person.name}</h4>
        <br />
        <h4> {person.email} </h4>
        <br />
        <h4> {person.howCurly} </h4>
        <br />
        <h4> {person.hairLength} </h4>
        <br />
        <h4> {person.hairColor} </h4>
        <br />
        {person.notes.map(note => <Note note={note} key={note}/>)}
        <br />
        <form onSubmit={handleNewNote} >
        <br />
            <input type='text' id="newNote" placeholder="new note" />
            <br />
            <input type='submit' />
        </form>
    </div>
)
}

export default Person