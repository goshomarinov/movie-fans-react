import detailsStyles from '../details/Details.module.css';
import * as api from '../../services/movieService';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';


export const Details = () => {
    const { userData } = useContext(UserContext);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    let authorCheck = false;

    if (userData) {
        if (userData._id == movie._ownerId) {
            authorCheck = true;
        } else {
            authorCheck = false;
        }
    }

    useEffect(() => {
        try {
            api.getOneMovie(id)
                .then(res => {
                    setMovie(res);
                })
        } catch (err) {
            alert(err.message);
        }
    }, [])

    return (
        <section className={detailsStyles['details']}>
            <img src={movie.imgUrl} />
            <section className={detailsStyles['container']}>
                <div className={detailsStyles['details-info']}>
                    <h3>Title: {movie.title}</h3>
                    <p>Image Url: {movie.imgUrl}</p>
                    <p>Year: {movie.year}</p>
                    <p>Description: {movie.description}</p>
                </div>
                <div className={detailsStyles['details-btn']}>

                    {userData
                        ? <Link to={`details/comments/${movie._id}`}>Commend</Link>
                        : null
                    }

                    {authorCheck
                        ? <>
                            <Link to={`/details/edit/${movie._id}`}>Edit</Link>
                            <Link to={`/details/delete/${movie._id}`}>Delete</Link>
                          </>
                        : null
                    }


                </div>
            </section>
        </section>
    );
};