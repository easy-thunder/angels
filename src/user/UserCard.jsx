import {v4 as uuidv4} from 'uuid'

function UserCard({card, addTooCart}){
let myuuid = uuidv4()

    function handleAddTooCart(){

        const newAdd = {
            key: myuuid,
            time: card.time,
            name: card.name,
            price: card.priceMax,
            image: card.image,
            detail: card.detail
        }
        addTooCart(newAdd)
        
        
        


    
    }


    return(
        <div className="serviceCard glow rounded-3xl " id={`serviceCard${card.id}`}>
            <h2 className="serviceName bg-slate-300 font-bold rounded-t-3xl">{card.name}</h2>
        <img className='photo' src={card.image} />
        {/* <p className='details'>description: <br />{card.detail} </p> */}
        <p className="servicePrice">Price: {card.priceMax}$</p>
        <p className='serviceTime'>service time:{card.time} minutes</p>
        <button onClick={handleAddTooCart} className="miniGlow cardButton" >Add Too Cart</button>
        </div>
        )
        }
        
        export default UserCard
