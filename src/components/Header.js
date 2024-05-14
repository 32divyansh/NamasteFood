import { useState} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
const[loginstatus,setloginstaus]=  useState("Login");

    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                       
                    <li>
                       <Link to="/About"> About Us </Link>
                   </li>

                    <li>
                        <Link to="/Contact">Contact Us </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                   if(loginstatus==="Login"? setloginstaus("Logout"):setloginstaus("Login"));
                    }}
                    >{loginstatus}</button>

                </ul>
            </div>
        </div>
    )
};

export default Header;