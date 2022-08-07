import { useNavigate, useParams } from "react-router-dom";
import * as api from '../../services/movieService';

import deleteformStyles from '../delete/Delete.module.css';


export const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const onCancel = (e) => {
        e.preventDefault();
        navigate(`/catalog/${id}`)
    }

    const onDelete = (e) => {
        e.preventDefault();

        try {
            api.deleteMovies(id)
                .then(res => {
                    navigate('/catalog');
                })
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <section className={deleteformStyles['delete-section']}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Octagon_delete.svg/1200px-Octagon_delete.svg.png"/>
            <form className={deleteformStyles['delete-form']}>
                <label>Are You Sure You Wish To Delete This Post!!!</label>
                <div className={deleteformStyles['btns']}>
                    <input className={deleteformStyles['yes']} type="submit" value="Yes" onClick={onDelete}></input>
                    <input className={deleteformStyles['no']} type="submit" value="No" onClick={onCancel}></input>
                </div>
            </form>
        </section>
    );

};