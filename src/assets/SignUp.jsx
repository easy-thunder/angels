function SignUp(){

function handleNewClientForm(e){
    e.preventDefault()
    // const key = e.target.id
    // console.log(key)
    const selectCurly = e.target.howCurly
    const selectLength = e.target.hairLength
    const selectColor = e.target.hairColor


const newClient = {
    name: e.target.userName.value,
    email: e.target.email.value,
    password: e.target.password.value,
    howCurly: selectCurly.options[selectCurly.selectedIndex].text,
    hairLength: selectLength.options[selectLength.selectedIndex].text,
    hairColor: selectColor.options[selectColor.selectedIndex].text
}

fetch('http://localhost:3000/People', {
    method: "POST",
    headers:{'Content-Type': "application/json"},
    body: JSON.stringify(newClient)
})
}

    return(
        <div>
            <form id="newClientForm" onSubmit={handleNewClientForm}>

                <input type='text' placeholder="name" id="userName"/>

                <br />

                <input type='email' placeholder="Email" id="email"/>

                <br />

                <input type='password' placeholder="Password" id="password"/>
              
                <br />
               please select how Curly your hair is 
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
    )
}
export default SignUp