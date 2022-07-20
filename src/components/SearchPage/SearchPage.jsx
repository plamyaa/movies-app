import "./SearchPage.css"
import { genresData } from "../../genresData"
import { getSearchData } from "../../utils"
import React from "react"
import { getCards } from "../../utils"
import { useState } from "react"
import { Link } from "react-router-dom"
export function SearchPage () {
    const [genre, setGenre] = useState(-1);
    const [grade, setGrade] = useState('');
    const [popularity, setPopularity] = useState('');
    const [recommendation, setRecomedation] = useState([]);
    const [cardNumber, setCardNumber] = useState(0)
    const nextCard = () => {
        setCardNumber(cardNumber + 1);
    }
    const recomedationsChange = (data) => {
        const cards = getCards(data);
        setCardNumber(0);
        setRecomedation(cards);
    }
    const genreChange = (event) => {
        setGenre(Number(event.target.value));
        const data = getSearchData(Number(event.target.value), grade, popularity);
        recomedationsChange(data);
    }
    const gradeChange = (event) => {
        setGrade(event.target.value);
        const data = getSearchData(genre, event.target.value, popularity);
        recomedationsChange(data);
    }
    const popularityChange = (event) => {
        setPopularity(event.target.value);
        const data = getSearchData(genre, grade, event.target.value);
        recomedationsChange(data);
    }

    return(
        <div className="search-page">
            <form className="search-page__form">
                <p>Выберите жанр:</p>
                <select onChange={genreChange}>
                    <option value="-">-</option>
                    {genresData.map(genre => 
                        <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>
                <p>Оценка:</p>
                <div className="form__radio">
                    <label>
                        <input type="radio" id="high-grade" name="grade" value="high" onChange={gradeChange}/>
                        <span>Высокая</span>
                    </label>
                    
                    <label>
                        <input type="radio" id="low-grade" name="grade" value="low" onChange={gradeChange}/>
                        <span>Низкая</span>
                    </label> 
                </div>
                
                <p>Фильм:</p>
                <div className="form__radio">
                    <label>
                        <input type="radio" id="high-grade" name="popularity" value="high" onChange={popularityChange}/>
                        <span>Популярный</span>
                    </label>
                    
                    <label>
                        <input type="radio" id="low-grade" name="popularity" value="low" onChange={popularityChange}/>
                        <span>Неизвестный</span>
                    </label> 
                </div>
                <button style={{margin: "20px"}}>Поиск</button>
            </form>
        {(recommendation.length ? <Recommendation cards={recommendation} cardNumber={cardNumber}nextCard={nextCard}/> : <div>Нет фильмов</div>)}
        </div>
    )
}

const Recommendation = ({cards, cardNumber, nextCard}) => {
    const dataLength = cards.length;
    const cardInfo = (cards[cardNumber].props.movieData);
    return (dataLength > cardNumber ?
        <div className="recommedation">
            <div className="card">{cards.slice(cardNumber, cardNumber + 1)}</div>
            <div className="recommedation-pagination">
                <button onClick={nextCard}>Не подходит</button>
                <Link to={`/movie/${cardInfo.id}`} key={cardInfo.id}><button>Подходит</button></Link>
            </div>
            <p className="card-number">{cardNumber+1}/{dataLength}</p>
        </div>
    : <div><p>Больше нет фильмов по запросам</p></div>);
}