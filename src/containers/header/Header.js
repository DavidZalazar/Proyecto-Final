import React from "react"
import "./Header.scss"
import Toplogo from "../../assets/images/top-logo.svg"
const Header = () => {
    return (
    <Header classname="Header">
    <div classname="container">
        <a href="#inicio" class="logo">
            <img src={Toplogo} alt="logo 25Watts" />
        </a>
        <nav classname="navbar">
            <ul>
                <li>
                    <a href="#inicio">Home</a>
                    </li>
                <li>
                    <a href="#about">About</a>
                    </li>
                <li>
                    <a href="#products">Products</a>
                    </li>
                <li>
                    <a href="#services">Services</a>
                    </li>
                <li>
                    <a href="#contact">Contact</a>
                    </li>
            </ul>
        </nav>
    </div>
</Header>
    )
}

export default Header;