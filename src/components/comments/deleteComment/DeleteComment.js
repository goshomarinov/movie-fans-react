import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import deleteCommentStyles from '../deleteComment/DeleteComment.module.css';
import * as commentApi from '../../../services/commentsService';


export const DeleteComment = () => {
    const [movie, setMovie] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        try {
            commentApi.getOneComment(id)
            .then(res => {
                setMovie(res);
            })
        } catch (err) {
            alert(err.message);
        }
    },[])

    const onCancel = (e) => {
        e.preventDefault();
        navigate(`/catalog/${movie.postId}`);
    }

    const onDelete = (e) => {
        e.preventDefault();
        try {
            commentApi.deleteComment(id)
            .then(res => {
                navigate(`/catalog/${movie.postId}`);
            })
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <section className={deleteCommentStyles['delete-comm-section']}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Octagon_delete.svg/1200px-Octagon_delete.svg.png"/>
            <form className={deleteCommentStyles['delete-comm-form']}>
                <label>Are You Sure You Wish To Delete This Comment!!!</label>
                <div className={deleteCommentStyles['btns']}>
                    <input className={deleteCommentStyles['yes']} type="submit" value="Yes" onClick={onDelete}></input>
                    <input className={deleteCommentStyles['no']} type="submit" value="No" onClick={onCancel}></input>
                </div>
            </form>
        </section>
    );
};