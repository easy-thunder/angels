
function AdminCard({card}){

    function handleDelete(){

        fetch(`http://localhost:3000/services/${card.id}`,{
            method: "DELETE"
        })
        .then(r=>r.json())
        .then(alert('you have successfully deleted. This card no longer exists. You will see it persist as I am not handling state in the admin. To see the change refresh the page.'))
    }


    return(

        <div className="serviceCard">
            <h3 className="serviceName">{card.name}</h3>
        <img src={card.image} />
        <div>description: {card.detail} </div>
        <button onClick={handleDelete} className="miniGlow">Delete</button>
        <div className="servicePrice">Price: {card.priceMax}</div>
        <div>service time:{card.time} minutes</div>
        </div>
        )
        }
        
        export default AdminCard