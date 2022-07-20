import store from "./store/store";
import React from "react";
import { MovieCard } from "./components/MoviesList/MovieCard"

export function getSortedData( sortYear, sortDirection, genres) {
    let newData = store.getState().cardToggler; 
    if (sortDirection !== '-') {
        newData = getDirectionSort(newData, sortDirection);
    }
    if (sortYear !== '-') {
        newData = getYearSort(newData, sortYear)
    }
    
    if (genres.length) {
        newData = getGenresSort(newData, genres);
    }
    return newData;
}

export function getYearSort(data, sortYear) {
    return data.filter((movieData) => {
        if (movieData.release_date.slice(0, 4) == sortYear) {
            return (movieData);
        }
        return;
    })
}

export function getDirectionSort(data, sortDirection) {
    return data.slice().sort((a, b) => {
        if (sortDirection == 'Популярные по убыванию') {
            return b.popularity - a.popularity;
        }
        if (sortDirection == 'Популярные по возростанию') {
            return a.popularity - b.popularity;
        }
        if (sortDirection == 'Рейтинг по убыванию') {
            return b.vote_average - a.vote_average;
        }
        if (sortDirection == 'Рейтинг по возрастанию') {
            return a.vote_average - b.vote_average;
        }
    })
}

export function getGenresSort (data, genres) {
    return data.filter(movieData => genresCheck(movieData.genre_ids, genres));
}

export function genresCheck(movieIds, genres) {
    const ids = movieIds.filter(id => {
        if (genres.includes(id)) {
            return true;
        }
        return false;
    });
    if (ids.length >= genres.length) {
        return true;
    }
    return false;
}

export function getLiked() {
    const liked = store.getState().cardToggler;
    if (liked) {
        return liked.filter((movieData => {
            if (movieData.like) {
                return movieData;
            }
            return;
        }))
    }
    return [];
}

export function getWatchLater() {
    const bookmarked = store.getState().cardToggler;
    if (bookmarked) {
        return bookmarked.filter((movieData => {
            if (movieData.bookmark) {
                return movieData;
            }
            return;
        }))
    }
    return [];
}

export function getCurrentPage (data, page) {
    return data.slice((page - 1) * 10, page * 10)
}

export function gradeSort (data, grade) {
    return data.slice().filter(movieData => {
        if (grade ==="high" && movieData.vote_average > 5) {
            return movieData;
        }
        if (grade === "low" && movieData.vote_average <= 5){
            return movieData;
        }
        return;
    })
}

export function popularitySort (data, popularity) {
    return data.slice().filter(movieData => {
        if (popularity ==="high" && movieData.popularity > 100 && movieData.vote_count > 200) {
            return movieData;
        }
        if (popularity === "low" && movieData.popularity <= 100 && movieData.vote_count <= 200){
            return movieData;
        }
        return;
    })
}

export function getSearchData (genre, grade, popularity) {
    let data = store.getState().cardToggler; 
    if (genre !== -1) {
        data = getGenresSort(data, [genre]);
    }
    if (grade !== '') {
        data = gradeSort(data, grade);
    }
    if (popularity !== '') {
        data = popularitySort(data, popularity);
    }
    return data;
}
export function getCards (data) {
    return data.map((movieData) => {
        return (
            <MovieCard movieData={movieData} key={movieData.id} />
        );
    })
}

export function setInStorage (storage, cardId, dataType) {
    const currentStorage = storage.getItem(dataType) || [];
    const isDuplicate = currentStorage.find(id => id == cardId);
    if(isDuplicate) {
        const newStorage = currentStorage.filter(id => id != cardId);
        storage.setItem(dataType, newStorage);
    }
    else {
        currentStorage.push(cardId);
        storage.setItem(dataType, currentStorage);
    }  
}
