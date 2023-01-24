import { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import {v4 as uuidv4} from 'uuid'



function SignUp({handleLoginInfo , onSignOut}){
let myuuid = uuidv4()

    const history = useHistory()
const [users,setUsers] = useState([])
    // const [emailMatch, setEmailMatch] = useState(true)

useEffect(()=>{
    fetch('http://localhost:3000/People')
    .then(r=>r.json())
    .then(setUsers)
},[])






function handleNewClientForm(e){
    e.preventDefault()
    const selectCurly = e.target.howCurly
    const selectLength = e.target.hairLength
    const selectColor = e.target.hairColor

    function passwordMatch(){
    if(e.target.password.value!== e.target.passwordCheck.value){alert('passwords do not match')}
    else{null}

    }
    passwordMatch()


const newClient = {
    uuid: myuuid,
    name: e.target.userName.value,
    email: e.target.email.value,
    password: e.target.password.value,
    howCurly: selectCurly.options[selectCurly.selectedIndex].text,
    hairLength: selectLength.options[selectLength.selectedIndex].text,
    hairColor: selectColor.options[selectColor.selectedIndex].text,
    cart: [],
    notes: []
}





const emails = users.map(user=>user.email)

// console.log(emails)

function filterEmail(){
    const filter = emails.filter(email=>{
        if(email===newClient.email){
          return true
        }
        if(email !== newClient.email){return false
            }
    })
    if(filter.length!==1 && newClient.password!=="" && newClient.password.length > 8 && newClient.password!="password" && e.target.password.value===e.target.passwordCheck.value){
        // alert("should work")
        fetch('http://localhost:3000/People',{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newClient)
        })
        .then(r=>r.json())
        .then(handleLoginInfo(newClient))
        .then(history.push(`/`))
    }
    if(filter.length === 1){alert('In order to sign up you need an unused email and a password with more than 8 characters')}
}
filterEmail()

// console.log(emailMatch)




// console.log(match)
// if(match){alert("In order to add a user you must use a unique email if this is your first time signing up try submitting again!")}
// else{
//     console.log("good")
//     // fetch('http://localhost:3000/People', {
//     // method: "POST",
//     // headers:{'Content-Type': "application/json"},
//     // body: JSON.stringify(newClient)})
// }
// if(newClient.email !== person.email){

    //     setEmailMatch(emailMatch =>(!emailMatch)) useThis later maybe
// }
// if(emailMatch===false)
// { use this later maybe

// fetch('http://localhost:3000/People', {
//     method: "POST",
//     headers:{'Content-Type': "application/json"},
//     body: JSON.stringify(newClient)
//     //thinking about adding .then's and if okay response then I will re-direct to the user's profile.
// })}
// if (emailMatch===true){alert("In order to add a user you must use a unique email if this is your first time signing up try submitting again!")}
// ))

}

    return(
        <>
        <div>
            <form id="newClientForm" onSubmit={handleNewClientForm}>

                <input type='text' placeholder="name" id="userName"/>

                <br />

                <input type='email' placeholder="Email" id="email"/>

                <br />

                <input type='password' placeholder="Password" id="password"/>
                <br />
                <input type='password' placeholder="Check Password" id="passwordCheck"/>


              
                <br />
               Please select how Curly your hair is 
               <br />

               <select form="newClientForm" id="howCurly" name="howCurly">


                    <option value='dreads'>
                        Dreads
                    </option>

                    <option value='extraCurly'>
                        Extra Curly
                    </option>

                    <option value='curly'>
                        Curly
                    </option>

                    <option value='wavy'>
                        Wavy
                    </option>

                    <option value='straight'>
                        Straight
                    </option>
                </select>

                <br/>
                Please select your hair length
                <br />

                <select id="hairLength" form="newClientForm" name="hairLength">


                    <option value='short'>
                        Short less than 4"s
                    </option>

                    <option value='medium'>
                        Medium between 4" and 12"
                    </option>

                    <option value='long'>
                        Long between 1' and 2'
                    </option>

                    <option value='extraLong'>
                        Extra long above 2 '
                    </option>
                </select>

                <br />
                Please select your hair color
                <br />

                <select id="hairColor" form="newClientForm" name="hairColor">



                    <option value='brunette'>
                    Brunette
                    </option>

                    <option value='blonde'>
                        Blonde
                    </option>

                    <option value='red'>
                        red
                    </option>

                    <option value='black'>
                        black
                    </option>
                
                    <option value='dyed'>
                        dyed
                    </option>
                </select>
                    <br />
                <input type='submit' value='submit'/>
            </form> 


        </div>
        </>
    )
}
export default SignUp