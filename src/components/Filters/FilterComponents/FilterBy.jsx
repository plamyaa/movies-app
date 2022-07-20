import { sortValues } from "../../../consts";
import React from "react";
import "./FilterBy.css"
import { memo } from "react";

export const FilterBy = memo(function FilterBy({sortDirection, changeSortDirection}) {
    return (  
        <div className="sort-select">
            <p className="sort-select__article">Сортировать по:</p>
            <select className="selector" onChange={changeSortDirection} value={sortDirection}>
                {sortValues.map((direction) => {
                    return <option key={direction}>{direction}</option>
                })} 
            </select>
        </div>
    );
})