import AdminCard from "./AdminCard";

function AdminCardList({cardList}){
    return(
        <div>
            {cardList.map(card => <AdminCard 
            key = {card.id}
            card = {card}
            />)}
        </div>
    )
}
export default AdminCardList