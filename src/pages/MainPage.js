import React from "react";
import MovieList from "../components/MovieList";
import {useSelector} from "react-redux";

const MainPage = () => {
    const { movieData } = useSelector(state => state.MovieReducer);

    return(
        <div>
            <MovieList data={movieData}/>
        </div>
    )
};

export default MainPage;