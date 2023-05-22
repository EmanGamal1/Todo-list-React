import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <Link to="/" className="title">Home</Link>
            </ul>
        </nav>
    )
}

export default Navbar;
