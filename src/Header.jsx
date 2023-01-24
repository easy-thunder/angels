import { NavLink } from "react-router-dom"




function Header(){
    return(
        <div className="header">
<NavLink to='/login' exact >
            <button className="miniGlow">Login</button>
</NavLink>

<NavLink to='/signUp' exact>
            <button className="miniGlow">Sign Up</button>
</NavLink>

<NavLink to='/profile' exact>
            <button className="miniGlow">Profile</button>
</NavLink>

<NavLink to='/' exact>
            <button className="miniGlow">✂️</button>
</NavLink>

<NavLink to="/about" exact>
            <button className="miniGlow">About</button>
</NavLink>

<NavLink to="/contact" exact>
            <button className="miniGlow">Contact</button>
</NavLink>

<NavLink to='/cart' exact>
            <button className="miniGlow">🛒</button>
</NavLink>
        </div>
    )
}


export default Header