// import { useState } from "react"
import { useHistory} from "react-router-dom"
import {useState, useEffect} from "react"



function Login ({handleLoginInfo}){
    const history = useHistory()
    const [people, setPeople] = useState([])
    const [admins, setAdmins] = useState([])


    useEffect(()=>{
        fetch('http://localhost:3000/People')
        .then(r=>r.json())
        .then(setPeople)
    },[])

    useEffect(()=>{
        fetch('http://localhost:3000/Administrators')
        .then(r=>r.json())
        .then(setAdmins)
    },[])
// const [administrator, setAdministrator] = useState(false)

function handleUserLogin(e){
e.preventDefault()

const userLogin = {
    email: e.target.email.value,
    password: e.target.password.value
}
let loginUser;

people.filter(person=>{
    if(person.email===userLogin.email){
        loginUser=person
    }
})

const peopleEmails = people.map(person=>person.email)
const peoplePasswords = people.map(person=>person.password)
const adminEmails = admins.map(admin=>admin.email)
const adminPasswords = admins.map(admin=>admin.password)



if (e.target.administrator.checked === true){
    function filterEmail(){
        const filterEmail = adminEmails.filter(email=>{
            if(email===userLogin.email){
                return true
            }
            if(email !== userLogin.email){
                return false
            }
        })
        const filterPassword = adminPasswords.filter(password=>{
            if(password===userLogin.password){return true}
            if(password!==userLogin.password){ return false}
        })
        if(filterEmail.length===1 && filterPassword.length===1){ history.push(`/psdkjfasposd`)
        }
        else{alert("wrong email or password")}
    }
    filterEmail()
}
if(e.target.administrator.checked === false){
    function filterEmail(){
        const filterEmail = peopleEmails.filter(email=>{
            if(email===userLogin.email){
                return true
            }
            if(email !== userLogin.email){
                return false
            }
        })
        const filterPassword = peoplePasswords.filter(password=>{
            if (password===userLogin.password){ return true}
            if(password!== userLogin.password){return false}
        })
        if(filterEmail.length===1 && filterPassword.length===1){
            
            //userLogin - works
            //loginUser -doesn't work so far
            //note that if two passwords are the same then filterPassword will return more than one
            handleLoginInfo(loginUser)
            history.push(`/`)
        }
        else{alert("wrong email or password")}
    }
    filterEmail()
}








}

    return(
        <>
<div className="formContainer rounded-3xl">
    <form id="login" onSubmit={handleUserLogin}>
        <input type='email' placeholder="Email" id="email" className="form" />
        <br />
        <input type='password' placeholder="Password" id="password" className="form"/>
        <br />
        <label className="label">
        Are you an administrator?

        </label>
        <input type='checkbox' id="administrator" className="checkbox"/>
        <br />
        <input type='submit' className="submit bg-slate-100 rounded-3xl" />
    </form>
</div>
</>
    )
}

export default Login