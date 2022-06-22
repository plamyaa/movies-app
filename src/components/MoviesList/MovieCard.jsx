import "./MovieCard.css"


export const MovieCard = () => {
    return (
        <div className="movie-card">
            <img src={"pic.webp"} alt="" className="movie-picture"/>
            <div className="movie-header">
                <p className="rating">Рэйтинг: {"8,5"}</p>
                <img className="movie-header__star" src="Star.svg"></img>
                <img className="movie-header__bookmark" src="Bookmark.svg"></img>
            </div>
            <p className="movie-name">{"Ветер крепчает"}</p>
            <a className="more-info">Подробнее</a>
        </div>
    );
}