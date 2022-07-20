import { Filters } from "./Filters/Filters";
import { MoviesList } from "./MoviesList/MoviesList";
import { Context } from "../context";
import React, { useEffect, useState } from "react";
import "./Content.css";
import { getCards } from "../utils";
import { useSelector } from "react-redux";

//localStorage.clear();
export const Content = () => {
    const data = useSelector((state) => state.cardToggler);
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => 
        handleSortChange(data)
    , [data])
    const handleSortChange = (newData) => {
        const cards = getCards(newData);
        setSortedData(cards);
    }
    const [page, setPage] = useState(1);
    const setFirstPage = () => {
        setPage(1);
    }
    const handlePaginationClick = (event) => {
        if (event.target.className === "back-movies-button") {
            if (page === 1) {
                return;
            }
            setPage(page - 1);
        }
        else {
            if (page === Math.ceil(sortedData.length / 10) || sortedData.length === 0) {
                return;
            }
            setPage(page + 1);
        }
    }

    return (
        <div className="content">
            <Context.Provider value={{
                page: page,
                sortedData: sortedData,
                setFirstPage: setFirstPage,
                handleSortChange: handleSortChange,
                handlePaginationClick: handlePaginationClick,
            }}>
                <Filters />
                <MoviesList />
            </Context.Provider>
        </div>
    );
}


