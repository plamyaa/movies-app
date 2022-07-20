import React, { useState } from "react";
import "./MovieCard.css"
import { ModalLogin } from "../Header/ModalLogin";
import { toggleLike, toggleBookmark } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../store/store";
import { useStorage } from "../../storage/storage";
import { setInStorage } from "../../utils";

export const MovieCard = ({movieData}) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [starSrc, setStarSrc] = useState(movieData.like);
    const [bookmarkSrc, setBookmarkSrc] = useState(movieData.bookmark);
    const storage = useStorage()
    const handleClick = (event) => {
        if (!store.getState().authToggler) {
            setShowModal(!showModal);
            return;
        }

        const cardId = event.target.parentElement.id;
        if (event.target.className.includes("star")) {
            dispatch(toggleLike(cardId));
            setStarSrc(!starSrc);
            setInStorage(storage, cardId, 'favorite');
        }
        else {
            dispatch(toggleBookmark(cardId));
            setBookmarkSrc(!bookmarkSrc);
            setInStorage(storage, cardId, 'bookmark');
        }
    }
    const imagePath = movieData.poster_path || movieData.backdrop_path;
    return (
        <div className="movie-card">
            {(showModal ? <ModalLogin handleExit={handleClick} /> : null)}
            <img src={`https://image.tmdb.org/t/p/w500${imagePath}`} alt="" className="movie-picture"/>
            <div className="movie-header" id={movieData.id}>
                <p className="rating">Рэйтинг: {movieData.vote_average}</p>
                <img className="movie-header__star" src={starSrc ? "Star-yellow.svg" : "Star.svg"} onClick={handleClick}></img>
                <img className="movie-header__bookmark" src={bookmarkSrc ? "Bookmark-black.svg" : "Bookmark.svg"} onClick={handleClick}></img>
            </div>
            <p className="movie-name">{movieData.title}</p>
            <Link to={`/movie/${movieData.id}`} key={movieData.id} className="more-info">Подробнее</Link>
        </div>
    );
}


