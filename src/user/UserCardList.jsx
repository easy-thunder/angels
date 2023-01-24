import UserCard from "./UserCard"


function UserCardList({cardList, login, addTooCart, userInfo}){
    return(
        <div className="cardContainer">
            {cardList.map(card => <UserCard 
            key = {card.id}
            card = {card}
            login ={login}
            addTooCart={addTooCart}
            userInfo={userInfo}
            />)}
        </div>
    )
}

export default UserCardList