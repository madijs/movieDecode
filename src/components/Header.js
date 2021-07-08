import React, {useState} from "react";
import styles from "../assets/styles/Header.module.scss"
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_SUCCESS} from "../redux/types/searchTypes";

const Header = () => {
    const dispatch = useDispatch();
    const {originalData,movieData} = useSelector(state => state.MovieReducer);


    const handleSearch = event => {
        const arr = [];
        for (let i=0;i<originalData.length;i++){
            if (originalData[i].title.toLowerCase().includes(event.target.value.toLowerCase())){
                arr.push(originalData[i]);
            }
        }
        dispatch({
            type: SEARCH_SUCCESS,
            payload: arr
        });
    };

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img
                        src="https://eng.by/static/880/upload/blog_images/movie-night.jpg"
                        alt="logo"/>
                </div>
                <div className={styles.searchBar}>
                    <TextField
                        onChange={handleSearch}
                        style={{width:'350px'}}
                        id="outlined-basic" label="Поиск" variant="outlined" />
                </div>
            </div>
        </div>
    )
};

export default Header;