

function Scheduler({cart}){
    const timesInCart = cart.map(time=>time.time)
    function calculateTimeTotal(){
        const initialValue = 0;
        const TimeTotal = timesInCart.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue
        )
        return(TimeTotal)
    }
    const timeTotal = calculateTimeTotal()

    return(
        <div>
            <h3>Time: {timeTotal} minutes</h3>
            <input type='date' />
        </div>
    )
}


export default Scheduler




