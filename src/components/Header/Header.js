import React from 'react';
import logo from "../../icons/logo.svg";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <header>
            <div className='header-logo'>
                <img src={logo} alt="TuteDude" />
            </div>
            <div className='header-items'>
                <span>My Assignment</span>
                <span>Chat with Mentor</span>
                <span>
                    <FaUserCircle  className='profile-icon' />
                    Profile Name
                    <IoIosArrowDown className='profile-arrow' />
                </span>
            </div>
        </header>
    )
}

export default Header