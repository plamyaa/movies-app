import { Filters } from "./Filters/Filters";
import { MoviesList } from "./MoviesList/MoviesList";
import "./Content.css"

export const Content = () => {
    return (
        <div className="content">
            <Filters />
            <MoviesList />
        </div>
    );
} 