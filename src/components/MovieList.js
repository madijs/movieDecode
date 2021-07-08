import React from "react";
import MovieItem from "./MovieItem";
import styles from "../assets/styles/MovieList.module.scss";


const MovieList = ({data}) => {
    return(
        <div className={styles.list}>
            {data.map((el,index)=>(
                <MovieItem
                    key={index}
                    title={el.title}
                    description={el.description.substring(0,70)+"..."}
                    image={el.image}
                    rate={el.rate}
                />
            ))}
        </div>
    )
};

export default MovieList;