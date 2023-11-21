import react from 'react'
import {NavLink} from "react-router-dom"

 
function NavBar () {
    return (
        <>
        <NavLink to = "/">Home</NavLink>  |
        <NavLink to = "/cart">Cart</NavLink>  |
             <NavLink > Categories</NavLink>
        </>
    )
}
 
export default NavBar;