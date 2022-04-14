import { Link } from 'react-router-dom'
import { BsFillHouseDoorFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
               <li className="nav-item active">
                    <Link className="nav-link" to="/">< BsFillHouseDoorFill /></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active ml-auto">
                    <Link className="nav-link" to="/login">Log-in</Link>
                </li>
            </ul>
         </nav>
    );
}

export default Navbar;