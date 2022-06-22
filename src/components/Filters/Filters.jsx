import "./Filters.css"

export const Filters = () => {
    return (
        <div className="filters">
            <h2 className="filters__header">Фильтры:</h2>
            <button className="remove-filters-button">Сбросить все фильтры</button>
            <FilterBy />
            <ReleaseDate />
            <GenreList />
            <Pagination />
        </div>
    );
}

const FilterBy = () => {
    const sorts = ['Дате выпуска', 'Колличеству просмотров'];
    return (  
        <div className="sort-select">
            <p className="sort-select__article">Сортировать по:</p>
            <select className="selector">
                {sorts.map((sort) => {
                    return <option key={sort}>{sort}</option>
                })} 
            </select>
        </div>
    );
}

const ReleaseDate = () => {
    return (
        <div className="release-date">
            <p className="release-date__article">Год релиза:</p>
            <select className="selector">
                <option>{1}</option>
            </select>
        </div>
    );
}

const GenreList = () => {
    const Genres = [
    "боевик", "приключения", "мультфильм", "комедия", "криминал", 
    "документальный", "драма", "семейный", "фэнетзи", "история", 
    "ужасы", "музыка", "детекив", "мелодрама", "фантастика", 
    "телевизионный фильм", "триллер", "военный", "вестерн"];
    return (
        <div className="genres">
            {Genres.map((genre) => {
                return (
                    <label className="genre">
                        <input type="checkbox" key={genre}/>{genre}
                    </label>
                );
            })}
        </div>
    );
}

const Pagination = () => {
    return (
        <div className="pagination">
            <button className="back-movies-button">Назад</button>
            <button className="next-movies-button">Вперед</button>
            <p className="pagination-article">
                <span className="page-now">{1}</span>
                of
                <span className="page-all">{1000}</span>
            </p>
        </div>
    );
}