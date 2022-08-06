import { useParams } from 'react-router-dom';
import detailsStyles from '../details/Details.module.css';
import * as api from '../../services/movieService';
import { useState } from 'react';

export const Details = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    try {
        api.getOneMovie(id)
            .then(res => {
                setMovie(res);
            })
    } catch (err) {
        alert(err.message);
    }

    return (
        <section className={detailsStyles['details']}>
            <img src={movie.imgUrl} />
            <section className={detailsStyles['container']}>
                <div className={detailsStyles['details-info']}>
                    <h3>Title: {movie.title}</h3>
                    <p>Year: {movie.year}</p>
                    <p>Description: {movie.description}</p>
                </div>
                <div className={detailsStyles['details-btn']}>
                    <a href="">Commend</a>
                    <a href="">Edit</a>
                    <a href="">Delete</a>
                </div>
            </section>
        </section>
    );
};