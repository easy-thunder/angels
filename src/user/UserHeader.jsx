import { NavLink, useHistory} from "react-router-dom"



function UserHeader({login, onSignOut}){
    const history = useHistory()
    function signOut(){
        onSignOut()
        history.push('/login')
    }



    return(
        <div className="header">
            <button className="miniGlow" onClick={signOut}>SignOut</button>

<NavLink to={`/signUp`} exact>
            <button className="miniGlow">Sign Up</button>
</NavLink>

<NavLink to={`/userProfile/${login}`} >
            <button className="miniGlow">Profile</button>
</NavLink>

<NavLink to={`/`} exact>
            <button className="miniGlow">✂️</button>
</NavLink>

<NavLink to={`/about`} >
            <button className="miniGlow">About</button>
</NavLink>

<NavLink to={`/contact`} >
            <button className="miniGlow">Contact</button>
</NavLink>

<NavLink to={`/userCart/${login}`} >
            <button className="miniGlow">🛒</button>
</NavLink>
        </div>
    )
}


export default UserHeader