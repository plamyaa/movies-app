import { combineReducers } from "@reduxjs/toolkit";
import { data } from "../movies";
import { genresData } from "../genresData";

import { 
    TOGGLE_BOOKMARK,
    TOGGLE_LIKE, 
    TOGGLE_CHECKBOX, 
    RESET_CHECKBOXES,
    TOGGLE_AUTH,
    GET_STORAGE_DATA
} from "./actions";

const favoriteMovies = JSON.parse(localStorage.getItem("favorite")) || [];
const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmark")) || [];
export const reduxMovies = [
    ...data.map(movieData => {   
        const favoriteMovieInStorage = favoriteMovies.includes(movieData.id.toString());
        const bookmarkMovieInStorage = bookmarkedMovies.includes(movieData.id.toString());
        movieData = (favoriteMovieInStorage) ? {...movieData, like: true} : {...movieData, like: false};
        movieData = (bookmarkMovieInStorage) ? {...movieData, bookmark: true} : {...movieData, bookmark: false};
        return movieData;
    }),
];

export const clearData = [
    ...data.map(movieData => {
        return Object.assign({}, movieData, {
            like: false,
            bookmark: false,
        })
    })
]

export const reduxGenres = [
    ...genresData.map(genre => {
        return {
            ...genre,
            checked: false,
        }
    })
]


export function authToggler (state = false, action) {
    switch (action.type) {
        case TOGGLE_AUTH:
            return !state;
        default:
            return state
    }
}

export function checkboxToggler (state = reduxGenres, action) {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
            return state.map(genre => {
                if (genre.id == action.genreId) {
                    return Object.assign({}, genre, {
                        checked: !genre.checked,
                    })
                }
                return genre;
            })
        case RESET_CHECKBOXES:
            return state.map(genre => {
                return Object.assign({}, genre, {
                    checked: false,
                })
            })
        
        default: 
            return state;
    }
}

export function cardToggler(state = clearData, action) {
    switch (action.type) {
        case TOGGLE_LIKE:
            return state.map((card) => {
                if (action.cardId == card.id) {
                    return Object.assign({}, card, {
                        like: !card.like
                    })
                }
                return card;
            })
        case TOGGLE_BOOKMARK:
            return state.map((card) => {
                if (action.cardId == card.id) {
                    return Object.assign({}, card, {
                        bookmark: !card.bookmark
                    })
                }
                return card;
            })
        case GET_STORAGE_DATA:
            return reduxMovies;
        default:
            return state;
    }
}
export const reducers = combineReducers({
    cardToggler,
    checkboxToggler,
    authToggler,
})