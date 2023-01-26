import {
  addDays,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  startOfDay,
  subDays,
} from "date-fns";
import Day from "./Day";
import Fifteen from "./Fifteen";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function Cart() {
  const myId = v4;
// 1. I need too move day, setDay usestate too ap pass both down too cart 
//2. check to see if day === startDate{null} if(day!==startDate){setDay(startDate)}
//3. fetch delete....[day]

  const startDate = new Date();
  const [day, setDay] = useState(startDate);
  const [days, setDays] = useState([]);
  const endDate = addDays(startDate, 30);
  const dayEnd = endOfDay(startDate);
  const dayStart = startOfDay(startDate);
  const yesterDay = subDays(startDate, 1);
  const [nextDay, setNextDay] = useState(startDate);

  // console.log(yesterDay)

  useEffect(() => {
    fetch("http://localhost:3000/dates")
      .then((r) => r.json())
      .then(setDays);
  }, []);

  const destroyToday = days.filter((day) => {
    // const stringYesterDay = yesterDay.toString().slice(0, 10);
    const stringToday = startDate.toString().slice(0, 10);
    if (day.date === stringToday) {return day
    }
    else{return false}
    
    // console.log(dayNumber);
    // return dayNumber;
    // else{return true}
  })
  

let result;
  const test = destroyToday
  if(test[0]!=undefined){
    // console.log(test[0].id);
    result = test[0].id
    
  }
  console.log(result)
// useEffect(()=>{
//     fetch(`http://localhost:3000/dates/${result}`,{
//         method: "DELETE"
//     })
// })

  

  //   useEffect(()=>{
  //   })
  //     fetch('http://localhost:3000/dates',{
  //         method:
  //     })
  //   },[day])

  //   console.log(days);

  const sixtyDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const minutes = eachMinuteOfInterval({
    start: dayStart,
    end: dayEnd,
  });

  // Wed Jan 25 2023 09:33:00 GMT-0700 (Mountain Standard Time)

  const filterMinutes = minutes.filter((minute) => {
    const editMinute = minute.toString().slice(16).slice(0, 12);
    const onlyNumbers = editMinute.slice(3).slice(0, 2);
    // const onlyHours=(minute.toString().slice(16).slice(0,2).split(0).join(''))
    if (onlyNumbers % 15 === 0) {
      return true;
    } else {
      return false;
    }
  });

  const filterFifteenMinutes = filterMinutes.filter((minute) => {
    const onlyHours = minute.toString().slice(16).slice(0, 2);
    // const onlyHours=(minute.slice(0,2))
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
  // console.log(filterFifteenMinutes)

  const stringMinutes = filterFifteenMinutes.map((string) =>
    string.toString().slice(16).slice(0, 5)
  );
  // console.log(stringMinutes)

  //tool too build you json
  function addDate() {
    setNextDay(addDays(nextDay, 1));
    const nextDayString = nextDay.toString().slice(0, 10);
    console.log(nextDayString);
    const dateObj = {
      date: nextDayString,
      "09:00": "",
      "09:15": "",
      "09:30": "",
      "09:45": "",
      "10:00": "",
      "10:15": "",
      "10:30": "",
      "10:45": "",
      "11:00": "",
      "11:15": "",
      "11:30": "",
      "11:45": "",
      "12:00": "",
      "12:15": "",
      "12:30": "",
      "12:45": "",
      "13:00": "",
      "13:15": "",
      "13:30": "",
      "13:45": "",
      "14:00": "",
      "14:15": "",
      "14:30": "",
      "14:45": "",
      "15:00": "",
      "15:15": "",
      "15:30": "",
      "15:45": "",
      "16:00": "",
      "16:15": "",
      "16:30": "",
      "16:45": "",
      "17:00": "",
      "17:15": "",
      "17:30": "",
      "17:45": "",
      "18:00": "",
      "18:15": "",
      "18:30": "",
      "18:45": "",
      "19:00": "",
    };
    fetch("http://localhost:3000/dates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dateObj),
    });
  }

  const filterDays = sixtyDays.filter((day) => {
    const stringDay = day.toString().slice(0, 10);
    if (stringDay.includes("Sun")) {
      return false;
    } else {
      return true;
    }
  });
  return (
    <>
      <div>
        oops this is a blank page. In order to see your cart you need to sign in
        or sign up
        <br />
        <form>
          <select>
            {filterDays.map((day) => (
              <Day day={day.toString().slice(0, 10)} key={day} />
            ))}
          </select>
          <select>
            {stringMinutes.map((fifteen) => (
              <Fifteen fifteen={fifteen} key={fifteen} />
            ))}
          </select>
          <input type="submit" />
        </form>
        <button onClick={addDate}>addDate</button>
      </div>
    </>
  );
}

export default Cart;
