import { useState } from "react";
import React from "react";
import "./ModalLogin.css";
import { toggleAuth } from "../../store/actions";
import { useDispatch } from "react-redux";
import { getStorageData } from "../../store/actions";

export const ModalLogin = ({ handleExit }) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (event) => {
        setLogin(event.target.value);
    }
    const handlePassoword = (event) => {
        setPassword(event.target.value);
    }
    const checkAutorisation = (event) => {
        event.preventDefault();
        if (login === "l" && password === "0") {
            alert("Успешная авторизация");
            dispatch(toggleAuth());
            dispatch(getStorageData());
            handleExit();
        }
        else {
            alert("Неверный логин или пароль");
        }
    }
    return (
        <div className="modal-content">
            <div className="modal__header">
                <p className="header__article">Авторизация</p>
                <button className="header__exit-button" onClick={handleExit}>x</button>
            </div>
            <form className="modal__content" onSubmit={checkAutorisation}>
                <p>Логин:</p>
                <input type="text" onChange={handleLogin}></input>
                <p>Пароль:</p>
                <input type="password" onChange={handlePassoword}></input>
                <button onClick={checkAutorisation}>Авторизоваться</button>
            </form>
        </div>
    );
}