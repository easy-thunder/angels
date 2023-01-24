import {v4 as uuidv4} from 'uuid'

function UserCard({card, addTooCart}){
let myuuid = uuidv4()

    function handleAddTooCart(){

        const newAdd = {
            key: myuuid,
            name: card.name,
            price: card.priceMax
        }
        addTooCart(newAdd)
        
        
        


    
    }


    return(
        <div className="serviceCard glow" id={`serviceCard${card.id}`}>
            <h2 className="serviceName">{card.name}</h2>
        <img className='photo' src={card.image} />
        <p className='details'>description: {card.detail} </p>
        <p className="servicePrice ">Price: {card.priceMax}</p>
        <p className='serviceTime'>service time:{card.time} minutes</p>
        <button onClick={handleAddTooCart} className="miniGlow cardButton" >Add Too Cart</button>
        </div>
        )
        }
        
        export default UserCard
