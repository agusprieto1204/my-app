import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Bebidas </h3>
            </Link>
            <div className="Categorias">
                <NavLink to={"/category/fernet"} className={({ isActive }) => isActive ? "ActivaOption" : "Option"}>fernet</NavLink>
                <NavLink to={"/category/gancia"} className={({ isActive }) => isActive ? "ActivaOption" : "Option"}>gancia</NavLink>
                <NavLink to={"/category/vino"} className={({ isActive }) => isActive ? "ActivaOption" : "Option"}>vino</NavLink>
            </div>
            <CartWidget />
        </nav>
    )

}
export default NavBar