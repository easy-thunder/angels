// import isThisMonth from "date-fns/isThisMonth";
import {
    addDays,
    eachDayOfInterval,
    eachMinuteOfInterval,
    endOfDay,
    startOfDay,
  } from "date-fns";
  import Day from "../noUserInfo/Day";
  import Fifteen from "../noUserInfo/Fifteen";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";


function UserCart({cart, handleDeleteService, userInfo}){

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_6bnczzn', 'template_h4c404v', e.target, '9EjF9qCq64eMWoiH5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
e.target.reset()
alert("You have submitted your request. We are clearing your cart and redirecting you to our home page.")
handleDeleteService()
useHistory().push('/')


    }

    // const thisMonth = isThisMonth(Date)
    // console.log(thisMonth)
    // const initialValue = 0;

    // const priceTotal = eachPrice.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue, initialValue
    // )
    const timesInCart = cart.map(time=>time.time)

    const timeTotal = calculateTimeTotal()
    function calculateTimeTotal(){
        const initialValue = 0;
        const TimeTotal = timesInCart.reduce(
            (accumulator, currentValue) => accumulator + currentValue, initialValue
        )
        return(TimeTotal)
    }
    

    
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
    const startDate = new Date();
    const endDate = addDays(startDate, 30);
    const dayEnd = endOfDay(startDate);
    const dayStart = startOfDay(startDate);
  
    const sixtyDays = eachDayOfInterval({
      start: startDate,
      end: endDate,
    });
  
    const minutes = eachMinuteOfInterval({
      start: dayStart,
      end: dayEnd,
    });
  
    const filterMinutes = minutes.filter((minute) => {
      const editMinute = minute.toString().slice(16).slice(0, 12);
      const onlyNumbers = editMinute.slice(3).slice(0, 2);
  
      if (onlyNumbers % 15 === 0) {
        return true;
      } else {
        return false;
      }
    });
  
    const filterFifteenMinutes = filterMinutes.filter((minute) => {
      const onlyHours = minute.toString().slice(16).slice(0, 2);
      if (
        onlyHours === "09" ||
        onlyHours === "10" ||
        onlyHours === "11" ||
        onlyHours === "12" ||
        onlyHours === "13" ||
        onlyHours === "14" ||
        onlyHours === "15" ||
        onlyHours === "16" ||
        onlyHours === "17" ||
        onlyHours === "18" ||
        onlyHours === "19"
      ) {
        return true;
      }
    });
  
    const stringMinutes = filterFifteenMinutes.map((string) =>
      string.toString().slice(16).slice(0, 5)
    );
  
  
    const filterDays = sixtyDays.filter((day) => {
      const stringDay = day.toString().slice(0, 10);
      if (stringDay.includes("Sun")) {
        return false;
      } else {
        return true;
      }
    });



    return(
        <>
        <div className="formContainer rounded-3xl">
    
            <button onClick={clearCart}>ClearCart</button>
            {cart.map(service => { 
                return(
                    <div>
                    <h3></h3>
                <ul>
                  
                    <li>service:{service.name}</li>
                    <li>Price:{service.price}$</li>
                </ul>
                
                </div>
                
            )
            })}
            
        <h3 className="label">Price estimate: {priceTotal}$</h3>
        <h3 className="label" >Time estimate:{timeTotal} minutes </h3>
        <br />
        Tell us your preferred appointment time and confirm the details of your order. On submit we will reach out as soon as we can.
        <form onSubmit={sendEmail}>
          <select id="day" name="day" className="form">
            {filterDays.map((day) => (
              <Day day={day.toString().slice(0, 10)} key={day} />
            ))}
          </select>
          
          <select id="time" name="time" className="form">
            {stringMinutes.map((fifteen) => (
              <Fifteen fifteen={fifteen} key={fifteen} />
            ))}
          </select>
          <br />
          <label className="label">
          price

          </label>
          <br />
          <input name="price" type='text' value={`${priceTotal}$`} className="form"/>
          <br />
          <label className="label">
          estimated time

          </label>

          <br />
          <input name="timeTotal" type='text' value={`${timeTotal} minutes`}  className="form"/>
          <br />
          <label className="label">
          email 

          </label>

          <br />
          <input name="email" type='text' value={userInfo.email} className="form"/>
          <br />
          <label className="label">
          phone number
          </label>

          <br />
          <input name="phone" type='text' value={userInfo.phone} className="form"/>
          <br />
          <label className="label">
          name 

          </label>

          <br />
          <input name="name" type='text' value={userInfo.name} className="form"/>
          <br />
          <label className="label">
          hair details 

          </label>

          <br />
          <input type='text' name="howCurly" value={userInfo.howCurly} className="form"/>
          <input type='text' name="hairLength" value={userInfo.hairLength} className="form"/>
          <input type='text' name="hairColor" value={userInfo.hairColor} className="form"/>
          <br />
          <label className="label">
          the service you want is:

          </label>

          <br />
          <input type='text' name="service" value={cart[0].name} className="form"/>
          <br />
        
          <input type="submit" className="submit bg-slate-200 rounded-3xl" />
        </form>

        </div> 
        </>
    )
}

export default UserCart