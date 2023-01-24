import { useHistory } from "react-router-dom"

function UserProfile({userInfo, onSignOut}){

    const history = useHistory()

    function handlePatchClient(e){


        // password passwordCheck currentPassword

        e.preventDefault()
        const selectCurly = e.target.howCurly
        const selectLength = e.target.hairLength
        const selectColor = e.target.hairColor
        let howCurlyValue;
        let hairLengthValue;
        let hairColorValue

        const nameValue = e.target.userName.value ? e.target.userName.value : userInfo.name

        const emailValue = e.target.email.value ? e.target.email.value : userInfo.email

        const passwordValue = e.target.password.value ? e.target.password.value : userInfo.password

        const passwordCheck = e.target.passwordCheck.value ? e.target.passwordCheck.value : userInfo.password

        const currentPassword = e.target.currentPassword.value

// note that a value will still be truthy because there will be a value of select

        if(selectCurly.options[selectCurly.selectedIndex].text==="Please Select"){howCurlyValue = userInfo.howCurly}

        if(selectCurly.options[selectCurly.selectedIndex].text!=="Please Select"){howCurlyValue = selectCurly.options[selectCurly.selectedIndex].text}


        // const howCurlyValue = selectCurly.options[selectCurly.selectedIndex].text ? selectCurly.options[selectCurly.selectedIndex].text : userInfo.howCurly

        if (selectLength.options[selectLength.selectedIndex].text==="Please Select"){hairLengthValue=userInfo.hairLength}


        if(selectLength.options[selectLength.selectedIndex].text!=="Please Select"){hairLengthValue=selectLength.options[selectLength.selectedIndex].text}

        // const hairLengthValue = selectLength.options[selectLength.selectedIndex].text 

        if(selectColor.options[selectColor.selectedIndex].text==="Please Select"){hairColorValue=userInfo.hairColor}
        if(selectColor.options[selectColor.selectedIndex].text!=="Please Select"){hairColorValue=selectColor.options[selectColor.selectedIndex].text}

        // const hairColorValue = selectColor.options[selectColor.selectedIndex].text
        // password=passwordValue passwordCheck=e.target.passwordCheck.value currentPassword

        if(passwordValue!==passwordCheck){alert('Passwords do not match'); return 0}

        if(passwordValue.length < 8 || passwordValue=="password"){
            alert('password must be larger than 8 characters'); return 0}
        
    
    const updateClient = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        howCurly: howCurlyValue,
        hairLength: hairLengthValue,
        hairColor: hairColorValue
    }




    if(currentPassword === userInfo.password){
    fetch(`http://localhost:3000/People/${userInfo.id}`,{
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updateClient)
    })
    .then(r=>r.json())
    .then(alert('Update was successful logging you out to configure changes'))
    .then(onSignOut())
    .then(history.push('/'))
}
if(currentPassword !== userInfo.password){
    alert('you did not enter the correct password too verify your account.')
}

    }




    return(
        <>
        <div>
            <h3>Name: {userInfo.name}</h3>
            <h4>Hair Type: {userInfo.howCurly}</h4>
            <h4>Hair Length: {userInfo.hairLength}</h4>
            <h4>hairColor: {userInfo.hairColor}</h4>
        </div>
        <h3>Edit your profile</h3>
        <form id="newClientForm" onSubmit={handlePatchClient}>

                <input type='text' placeholder="name" id="userName"/>

                <br />

                <input type='email' placeholder="Email" id="email"/>

                <br />

                <input type='password' placeholder="New Password" id="password"/>
                <br />
                <input type='password' placeholder="Check password" id="passwordCheck" />
              
                <br />
               Please select how Curly your hair is 
               <br />

               <select form="newClientForm" id="howCurly" name="howCurly">

               <option value= {null}>
                        Please Select
                    </option>

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

                <option value= {null}>
                        Please Select
                    </option>

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

                <option value= {null}>
                        Please Select
                    </option>

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
                    <input type='password' placeholder="Current Password" id="currentPassword"/>
                <input type='submit' value='submit' style={{cursor: "pointer"}}/>
            </form> 



        </>
    )
}

export default UserProfile