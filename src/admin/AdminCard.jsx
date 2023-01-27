import { useState } from "react"



function AdminCard({card}){
    const [open, setOpen]=useState(false)

    function handleDelete(){

        fetch(`http://localhost:3000/services/${card.id}`,{
            method: "DELETE"
        })
        .then(r=>r.json())
        .then(alert('you have successfully deleted. This card no longer exists. You will see it persist as I am not handling state in the admin. To see the change refresh the page.'))
    }

    function showEdit(){
        setOpen(open => (!open))
    }
    function handleEdit(e){
        e.preventDefault()
        console.log(e.target.image.value)
        console.log(card.id)

        fetch(`http://localhost:3000/services/${card.id}`,{method:"Patch",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({image: e.target.image.value})


        })
        .then(r=>r.json())
        .then(alert('you have successfully edited refresh to see changes'))
        
    }


    return(
        <>
        <div className="bg-slate-100 my-5">
            <h3 className="serviceName">{card.name}</h3>
        <img src={card.image} />
        <div>description: {card.detail} </div>
        <button onClick={handleDelete} className="miniGlow">Delete</button>
        <button onClick={showEdit}>edit</button>
        <div className="servicePrice">Price: {card.priceMax}</div>
        <div>service time:{card.time} minutes</div>
        </div>
        <form className={`${open ? "block" : "hidden"}`} onSubmit={handleEdit}>
            <input type='text' id="image" placeholder="image url"/>

            <br></br>
            <input type="submit" />
        </form>
        </>

        )
        }
        
        export default AdminCard