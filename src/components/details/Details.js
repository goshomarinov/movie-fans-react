import * as api from '../../services/movieService';
import * as commentApi from '../../services/commentsService';
import detailsStyles from '../details/Details.module.css';
import { Comments } from '../comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const Details = () => {
    const [comments, setComments] = useState([]);
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

    useEffect(() => {
        try {
            commentApi.getAllComments()
            .then(res => {
                const comm = res.filter(c => c.postId == id);
                setComments(comm)
            })
        } catch (err) {
            alert(err.message);
        }
    },[])

    return (
        <>
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
                            ? <Link to={`/catalog/details/comment/${movie._id}`} className={detailsStyles['comm-btn']}>Comment</Link>
                            : null
                        }

                        {authorCheck
                            ? <>
                                <Link to={`/catalog/details/edit/${movie._id}`}>Edit</Link>
                                <Link to={`/catalog/details/delete/${movie._id}`}>Delete</Link>
                            </>
                            : null
                        }
                    </div>
                </section>
            </section>
            {comments.length > 0
                   ? comments.map(c => <Comments key={c._id} comment={c}/>)
                   : <h2 className={detailsStyles['no-comm']}>No Comments Yet </h2>
            }
        </>
    );
};