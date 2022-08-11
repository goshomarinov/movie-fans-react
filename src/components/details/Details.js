import * as api from '../../services/movieService';
import * as commentApi from '../../services/commentsService';
import * as likesApi from '../../services/likesService';
import detailsStyles from '../details/Details.module.css';
import { Comments } from '../comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const Details = () => {
    const { userData } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [movie, setMovie] = useState([]);
    const [likes, setLikes] = useState([]);
    const { id } = useParams();

    let authorCheck = false;
    let isLiked = false;

    useEffect(() => {
        try {
            Promise.all([
                api.getOneMovie(id),
                commentApi.getAllComments(),
                likesApi.getAllLikes(),
            ])
                .then(res => {
                    setMovie(res[0])
                    setComments(res[1].filter(c => c.postId == id))
                    setLikes(res[2].filter(l => l.postId == id))
                })
        } catch (err) {
            alert(err.message);
        }
    }, [])

    if (likes.length > 0) {
        isLiked = likes.some(l => l._ownerId == userData._id);
    } else {
        isLiked = false;
    }

    if (userData) {
        if (userData._id == movie._ownerId) {
            authorCheck = true;
        } else {
            authorCheck = false;
        }
    }

    const onLike = () => {
        try {
            likesApi.createLike({ postId: movie._id })
                .then(res => {
                    setLikes(state => [...state, res])
                })

        } catch (err) {
            alert(err.message);
        }
    }

    const onDislike = () => {
        try {
            const [{ ...like }] = likes.filter(l => l._ownerId == userData._id);
            likesApi.deleteLike(like._id)
                .then(res => {
                    setLikes(state => [...state.filter(l => l._id != like._id)])
                })

        } catch (err) {
            alert(err.message);
        }
    }

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
                        <p>Likes: {likes.length}</p>
                    </div>
                    <div className={detailsStyles['details-btn']}>

                        {userData
                            ? <Link
                                to={`/catalog/details/comment/${movie._id}`}
                                className={detailsStyles['comm-btn']}
                            >Comment
                            </Link>
                            : null
                        }

                        {isLiked
                            ? <button
                            className={detailsStyles['like']}
                                onClick={onDislike}
                            >Dislike
                                <i className="fa-solid fa-thumbs-down"></i>
                            </button>
                            : <button
                            className={detailsStyles['like']}
                                onClick={onLike}
                            >Like
                                <i className="fa-solid fa-thumbs-up"></i>
                            </button>
                        }

                        {authorCheck
                            ? <>
                                <Link to={`/catalog/details/edit/${movie._id}`}>Edit</Link>
                                <Link
                                    className={detailsStyles['delete']}
                                    to={`/catalog/details/delete/${movie._id}`}
                                >Delete
                                </Link>
                            </>
                            : null
                        }
                    </div>
                </section>
            </section>
            {comments.length > 0
                ? comments.map(c => <Comments key={c._id} comment={c} />)
                : <h2 className={detailsStyles['no-comm']}>No Comments Yet </h2>
            }
        </>
    );
};