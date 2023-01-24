import { NavLink, useHistory } from "react-router-dom"




function AdminHeader(){

    const history = useHistory()

function signOut(){
    history.push('/')
}

    return(
        <div>
Angel... use this navigator too swap between your users and your home page. Don't worry it is supposed to look like this as I didn't worry about the styling for the back end.
<button onClick={signOut}>sign-out</button>

<NavLink to='/asdfjpwlks' exact>
            <button>Profile</button>
</NavLink>

<NavLink to='/psdkjfasposd' exact>
            <button>✂️</button>
</NavLink>

        </div>
    )
}


export default AdminHeader