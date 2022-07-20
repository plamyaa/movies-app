import "./Filters.css"
import React from "react";
import { getSortedData } from "../../utils";
import { useState, useContext } from "react";
import { Pagination } from "./FilterComponents/Pagination";
import { Context } from "../../context";
import { FavoriteMoviesButtons } from "./FilterComponents/FavoriteMoviesButtons";
import { FilterBy } from "./FilterComponents/FilterBy";
import { ReleaseDate } from "./FilterComponents/ReleaseDate";
import { GenreList } from "./FilterComponents/GenreList";
import { getLiked, getWatchLater } from "../../utils";
import store from "../../store/store";
import { useDispatch, useSelector  } from "react-redux";
import { resetCheckboxes } from "../../store/actions";
import { Link } from "react-router-dom";

export const Filters = () => {
    const { handleSortChange, setFirstPage } = useContext(Context);
    const isUserAuth = useSelector((state) => state.authToggler);
    const [sortGenres, setSortGenres] = useState([]);
    const [sortDirection, setSortDirection] = useState('-');
    const [sortYear, setSortYear] = useState('-');
    const dispatch = useDispatch();

    const clearFilters = () => {
        setSortDirection('-');
        setSortYear('-');
        setSortGenres([]);
        setFirstPage();
        dispatch(resetCheckboxes());
        handleSortChange(store.getState().cardToggler); 
    }
    const changeSortYear = (event) => {
        setSortYear(event.target.value);
        setFirstPage();
        const newSortedData = getSortedData(event.target.value, sortDirection, sortGenres);
        handleSortChange(newSortedData);
    }
    const changeSortDirection = (event) => {
        setSortDirection(event.target.value);
        setFirstPage();
        const newSortedData = getSortedData(sortYear, event.target.value, sortGenres);
        handleSortChange(newSortedData);
    }
    const changeSortGenre = (genres) => {
        setSortGenres(genres);
        const newSortedData = getSortedData(sortYear, sortDirection, genres);
        handleSortChange(newSortedData); 
    }
    const handleFavoriteClick = (value) => {
        if (value === "favorite") {
            handleSortChange(getLiked());
        }
        else {
            handleSortChange(getWatchLater());
        }
    }
    
    return (
        <div className="filters">
            <h2 className="filters__header">Фильтры:</h2>
            <button className="remove-filters-button" onClick={clearFilters}>Сбросить все фильтры</button>
            <Link to={`/search`} ><button className="search-button">Поиск</button></Link>
            {(isUserAuth ? <FavoriteMoviesButtons handleClick={handleFavoriteClick} /> : null)}
            <FilterBy sortDirection={sortDirection} changeSortDirection={changeSortDirection}/>
            <ReleaseDate sortYear={sortYear} changeSortYear={changeSortYear}/>
            <GenreList sortGenres={sortGenres} changeSortGenre={changeSortGenre}/>
            <Pagination />
        </div>
    );
}