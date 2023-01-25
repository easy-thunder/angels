import Scheduler from "./Scheduler";
// import isThisMonth from "date-fns/isThisMonth";


function UserCart({cart, handleDeleteService}){

    // const thisMonth = isThisMonth(Date)
    // console.log(thisMonth)
    // const initialValue = 0;

    // const priceTotal = eachPrice.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue, initialValue
    // )
    const pricesInCart = cart.map(price=>price.price)
    function calculatePriceTotal(){
        const initialValue = 0;
        const PriceTotal = pricesInCart.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue
        )
        return(PriceTotal)
    }
    console.log(calculatePriceTotal())
    const priceTotal = calculatePriceTotal()

    function clearCart(){
        handleDeleteService()
    }



    return(
        <>
        <div>
    
            <button onClick={clearCart}>ClearCart</button>
            {cart.map(service => { console.log(service.id)
                return(
                    <div>
                    <h3></h3>
                <ul>
                    <li>Item:{service.name}</li>
                    <li>Price:{service.price}$</li>
                </ul>
                
                </div>
                
            )
            })}
            
        <h3>Price: {priceTotal}$</h3>
        {/* <Scheduler cart ={cart}/> */}

        </div> 
        </>
    )
}

export default UserCart