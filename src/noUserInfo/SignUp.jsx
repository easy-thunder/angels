import { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import {v4 as uuidv4} from 'uuid'


function SignUp({handleLoginInfo }){
let myuuid = uuidv4()


    const history = useHistory()
const [users,setUsers] = useState([])

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
    phone: e.target.phone.value,
    email: e.target.email.value,
    password: e.target.password.value,
    howCurly: selectCurly.options[selectCurly.selectedIndex].text,
    hairLength: selectLength.options[selectLength.selectedIndex].text,
    hairColor: selectColor.options[selectColor.selectedIndex].text,
    cart: [],
    notes: []
}





const emails = users.map(user=>user.email)
const passwords = users.map(user=>user.password)

// console.log(emails)

function filterEmail(){
    const filter = emails.filter(email=>{
        if(email===newClient.email){
          return true
        }
        if(email !== newClient.email){return false
            }
    })
const pass = passwords.filter(pass=>{
    if(pass===newClient.password){
        return true
    }
    if(pass !== newClient.password){
        return false
    }
})
if(e.target.password.value.length<8){
    alert("your password must be longer than eight characters")
    return(0)
}

if(e.target.phone.value===""){
    alert("We need a phone number. Your phone number will only be used to contact when you schedule a service. If you have any questions call us at 303-507-5815")
    return(0)
}
if(e.target.email.value===""){
    alert("We need an email to render services. Your email will be used only to contact when you schedule a service and for login purposes. If you have any questions call us at 303-507-5815")
    return(0)
}



    if(filter.length!==1 && pass.length!==1 && e.target.password.value!=="" && e.target.password.value.length > 8 && e.target.password.value!="password" && e.target.password.value===e.target.passwordCheck.value){
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
    if(pass.length === 1){alert("set a stronger password")}
}
filterEmail()
}

    return(
        <>
        <div className="formContainer rounded-3xl">
            <form id="newClientForm" onSubmit={handleNewClientForm}>
            <label className="label">Name:</label>
    
                <input type='text' placeholder="name" id="userName" className="form" />

                <br />
                <label className="label">Email:</label>
                
                

                <input type='email' placeholder="Email" id="email" className="form"/>

                <br />
                <label className="label">phone:</label>
                <input type='text' placeholder="phone number" id="phone" className="form"/>

                <br />
                <label className="label">Password</label>

                <input type='password' placeholder="Password" id="password" className="form"/>
                <br />
                <label className="label">Confirm</label>

                <input type='password' placeholder="Check Password" id="passwordCheck" className="form"/>


              
                <br />
                <label className="label">
               Please select how Curly your hair is 

                </label>
               <br />

               <select form="newClientForm" id="howCurly" name="howCurly" className="form">


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
                <label className="label">
                Please select your hair length

                </label>
                <br />

                <select id="hairLength" form="newClientForm" name="hairLength" className="form">


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
                <label className="label">
                Please select your hair color

                </label>
                <br />

                <select id="hairColor" form="newClientForm" name="hairColor" className="form">



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
                <input type='submit' value='submit' className="cursor-pointer bg-slate-50 rounded-3xl submit"/>
            </form> 


        </div>
        </>
    )
}
export default SignUp