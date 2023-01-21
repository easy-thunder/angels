function Card({card}){

return(
<div>
    <h3>{card.name}</h3>
<img src={card.image} />
<div>description: {card.detail} </div>
<button>Add Too Cart</button>
<div>Price Range: {card.priceMin} - {card.priceMax}</div>
<div>service time:{card.time} minutes</div>
</div>
)
}

export default Card