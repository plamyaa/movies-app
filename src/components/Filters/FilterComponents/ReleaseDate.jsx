import "./FilterBy.css"
import { releaseYears } from "../../../consts";
import React from "react";

export const ReleaseDate = ({sortYear, changeSortYear}) => {
    return (
        <div className="release-date">
            <p className="release-date__article">Год релиза:</p>
            <select className="selector" onChange={changeSortYear} value={sortYear}>
                {releaseYears.map((year) => {
                    return <option key={year}>{year}</option>
                })} 
            </select>
        </div>
    );
}
