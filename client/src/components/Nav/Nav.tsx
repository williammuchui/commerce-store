import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

export default function Nav() {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    setIsLoggedIn(CheckIsLoggedIn())
    setIsAdmin(CheckIsAdmin());
    
    return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isLoggedIn && <li><Link to="/dashboard">Dashboard</Link></li>}
                    {(isAdmin && isLoggedIn) && <li><Link to="/admin">Admin</Link></li>}
                    <li><Link to="/about">About Us</Link></li> 
                </ul>
                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
    )
}

const CheckIsLoggedIn = (): boolean => {
    const [token, setToken] = useState<string>("");
    setToken(localStorage.get("token"));
    if (token.length) return true;
    return false;
}

const CheckIsAdmin = (): boolean => {
    return localStorage.get("isAdmin");
}