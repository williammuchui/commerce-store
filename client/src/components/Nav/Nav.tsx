import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
    return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
    )
}