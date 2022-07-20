import { useParams } from "react-router-dom";
import store from "../store/store";
import React from "react";

function getMovieData(movieId) {
    const data = store.getState().cardToggler;
    return data.filter((movieData) => {
        if (movieData.id == movieId) {
            return movieData;
        }
        return;
    })
}

export default function Details () {
    const params = useParams();
    const movieData = getMovieData(params.filmId)[0];
    const imagePath = movieData.poster_path || movieData.backdrop_path;
    return (
        <div className="details">
            <img src={`https://image.tmdb.org/t/p/w500${imagePath}`} alt="" className="details__image"></img>
            <p className="details__title">{movieData.title}</p>
            <p className="details__rating">Рэйтинг: {movieData.vote_average}</p>
            <p className="details__overview">{movieData.overview}</p>
            <p className="details__data">Дата выхода: {movieData.release_date}</p>
            <p className="details__language">Язык оригинала: {movieData.original_language}</p>
        </div>
    )
}