import "./Header.css";
import React from "react";

export const Header = () => {
    return (
        <header className="header">
            <p className="header__article">Home</p>
            <button className="header__button">Login</button>
        </header>
    );
}