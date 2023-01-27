import { NavLink } from "react-router-dom"
import { useState } from "react"



function Header(){
const [open, setOpen] = useState(false)



    return(
        <div className="bg-orange-100 rounded-3xl min-w-max">

        <h1 className=" border-stone-900 mx-auto text-slate-900 my-10" >Angels</h1>
        <div className="rounded-3xl bg-orange-900 threeDots ">
            <h1 className=" cursor-pointer  align-center" onClick={()=> setOpen(open=>(!open))}>⁝</h1>
        </div>




        <div className={` space-x-9 my-10 flex items-center justify-between mx-auto backgroundColor ${open ? "block" : "hidden"}`}>
<NavLink to='/login' exact >
            <button className={`miniGlow bg-teal-200 text-stone-900 ${open ? "block" : "hidden"} transition-colors`} >Login</button>
</NavLink>

<NavLink to='/signUp' exact>
            <button className={`miniGlow text-stone-900 ${open ? "block" : "hidden"}`}>Sign Up</button>
</NavLink>

<NavLink to='/profile' exact>
            <button className={`miniGlow text-stone-900 ${open ? "block" : "hidden"}`} >Profile</button>
</NavLink>

<NavLink to='/' exact>
            <button className={`miniGlow ${open ? "block" : "hidden"}`}>✂️</button>
</NavLink>

<NavLink to="/about" exact>
            <button className={`miniGlow text-stone-900 ${open ? "block" : "hidden"}`}>About</button>
</NavLink>

<NavLink to="/contact" exact>
            <button className={`miniGlow text-stone-900 ${open ? "block" : "hidden"}`}>Contact</button>
</NavLink>

<NavLink to='/cart' exact>
            <button className={`miniGlow text-stone-900`}>🛒</button>
</NavLink>
        </div>
        </div>
    )
}


export default Header