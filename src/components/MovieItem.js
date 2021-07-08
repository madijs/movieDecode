import React from "react";
import styles from "../assets/styles/MovieItem.module.scss"
import StarIcon from '@material-ui/icons/Star';


const MovieItem = ({title, description, image, rate}) => {
    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
            <div style={{position: 'absolute', bottom: 20, right: 30,display:'flex',alignItems:'center'}}>
                <div>
                    <StarIcon style={{color: 'orange'}}/>
                </div>
                <div style={{marginLeft:'4px'}}>
                    {rate}
                </div>
            </div>
        </div>
    )
};

export default MovieItem;