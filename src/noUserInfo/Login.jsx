// import { useState } from "react"



function Login (){

// const [administrator, setAdministrator] = useState(false)

function handleUserLogin(e){
e.preventDefault()

const userLogin = {
    email: e.target.email.value,
    password: e.target.password.value
}

console.log(e.target.administrator.checked)
if (e.target.administrator.checked === true){
    fetch('http://localhost:3000/Administrators')
    .then(r=>r.json)
    .then(administrators => administrators.map(administrator => {
        if(userLogin.email===administrator.email && userLogin.password===administrator.password){}
    }))
}








}

    return(
<div>
    <form id="login" onSubmit={handleUserLogin}>
        <input type='email' placeholder="Email" id="email" />
        <br />
        <input type='password' placeholder="Password" id="email" />
        <br />
        Are you an administrator?
        <input type='checkbox' id="administrator"/>
        <br />
        <input type='submit' />
    </form>
</div>
    )
}

export default Login