import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <NavLink to='/employees'>Employees</NavLink>
        </nav>
    )
}

export default NavBar