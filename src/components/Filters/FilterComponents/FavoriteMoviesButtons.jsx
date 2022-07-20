import "./FavoriteMoviesButtons.css"
import React from "react";
export const FavoriteMoviesButtons = ({handleClick}) => {
    return (
        <div className="autorised-filter">
            <button className="favorite-films" onClick={() => handleClick("favorite")} >Любимые фильмы</button>
            <button className="watch-later-films" onClick={() => handleClick("watchLater")} >Смотреть позже</button>
        </div>
    );
}
