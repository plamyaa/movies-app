import "./Pagination.css";
import { useContext } from "react";
import { Context } from "../../../context";
import React from "react";

export const Pagination = () => {
    const { page, sortedData, handlePaginationClick } = useContext(Context);
    return (
        <div className="pagination">
            <button className="back-movies-button" onClick={handlePaginationClick}>Назад</button>
            <button className="next-movies-button" onClick={handlePaginationClick}>Вперед</button>
            <p className="pagination-article">
                <span className="page-now">{page}</span>
                of
                <span className="page-all">{Math.ceil(sortedData.length/10)}</span>
            </p>
        </div>
    );
}