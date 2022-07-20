import "./GenreList.css"
import React from "react";
import { memo, useContext } from "react";
import { Context } from "../../../context";
import store from "../../../store/store";
import { useDispatch } from "react-redux";
import { toggleCheckbox } from "../../../store/actions";

export const GenreList = ({sortGenres, changeSortGenre}) => {
    const { setFirstPage } = useContext(Context);
    const getGenre = (event) => {
        const newGenre = Number(event.target.id);
        if (newGenre) {
            const genreIsSelected = sortGenres.includes(newGenre);
            let value = [];
            if (!genreIsSelected) {
                value = [newGenre];
            }
            changeSortGenre([...sortGenres.filter(genre => {   
                if (genre !== newGenre) {
                    return genre;
                }
                return;
            }), ...value]); 
            setFirstPage();
        }
    }

    return (
        <div className="genres" onClick={getGenre}>
            {store.getState().checkboxToggler.map((genre) => 
                <Checkbox genre={genre} key={genre.id} isChecked={genre.checked}/>           
            )}
        </div>
    );
}

const Checkbox = memo(function Checkbox({genre, isChecked}) {
    const dispatch = useDispatch()
    const handleCheckboxClick = (event) => {
        dispatch(toggleCheckbox(event.target.id))
    }
    return (
        <label className="genre" key={genre.id}>
            <input type="checkbox" checked={isChecked} id={genre.id} onChange={handleCheckboxClick}/>
            <span>{genre.name}</span>
        </label>
    );
})