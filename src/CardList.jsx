import Card from "./Card"

function CardList({cardList}){
    return(
        <div>
            {cardList.map(card => <Card 
            key = {card.id}
            card = {card}
            />)}
        </div>
    )
}

export default CardList