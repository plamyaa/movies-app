import "./Header.css";
import { ModalLogin } from "./ModalLogin";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal)
    }
    return (
        <header className="header">
            <Link className="header__article" to="/">Home</Link>
            <button className="header__button" onClick={handleClick}>Login</button>
            {(showModal ? <ModalLogin handleExit={handleClick} /> : null)}
        </header>
    );
}

