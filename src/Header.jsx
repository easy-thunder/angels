import { NavLink } from "react-router-dom"




function Header(){
    return(
        <div>
<NavLink to='/login' exact>
            <button>Login</button>
</NavLink>

<NavLink to='/signUp' exact>
            <button>Sign Up</button>
</NavLink>

<NavLink to='/profile' exact>
            <button>Profile</button>
</NavLink>

<NavLink to='/' exact>
            <button>✂️</button>
</NavLink>

<NavLink to="/about" exact>
            <button>About</button>
</NavLink>

<NavLink to="/contact" exact>
            <button>Contact</button>
</NavLink>

<NavLink to='/cart' exact>
            <button>🛒</button>
</NavLink>
        </div>
    )
}


export default Header