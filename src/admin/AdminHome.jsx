import AdminHeader from "./AdminHeader";
import AdminCardList from "./AdminCardList";
function AdminHome({cardList}){
function handleNewCard(e){
e.preventDefault()

const newCard = {
    name: e.target.name.value,
    purchase: e.target.purchase.value,
    image: e.target.image.value,
    detail: e.target.detail.value,
    priceMax: e.target.priceMax.value,
    time: e.target.time.value,
    consultation: e.target.consultation.checked,
    why: e.target.why.value
}

fetch('http://localhost:3000/services',{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newCard)
})
.then(r=>r.json())
.then(alert('You have successfully added a new service or product. '))

}


return(
    <div>
        <AdminHeader />
        Add a new service or product
        <form onSubmit={handleNewCard}>
            <input type="text" placeholder="name" id="name"/>
            <br />
            <input type='text' placeholder="service or product be sure too type in exactly service or product" id="purchase" />
            <br />
            <input type='url' placeholder="image url" id="image" />
            <br />
            <input type='text' placeholder="service or product details" id="detail" />
            <br />
            <input type='number' placeholder="maximum price" id="priceMax" />
            <br />
            <input type='number' placeholder="time required" id="time" />
            <br />
            does this require consultation?
            <input type='checkbox' id="consultation" />
            <br />
            <input type="text" placeholder="if it requires consultation why does it require consultation?" id="why"/>
            <input type='submit' />
        </form>
        <AdminCardList cardList={cardList}/>
    </div>
)
}


export default AdminHome