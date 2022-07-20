import "./Movieslist.css";
import { Context } from "../../context";
import React, { useContext } from "react";
import { getCurrentPage } from "../../utils";

export const MoviesList = () => {
    const { page, sortedData } = useContext(Context);
    const currentPage = getCurrentPage(sortedData, page);
    return (
        <div className="movies-list">
            {currentPage}
        </div>
    );
}

