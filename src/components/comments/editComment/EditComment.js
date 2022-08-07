import { useNavigate, useParams } from 'react-router-dom';
import { editCommBtnValidator, editCommValidator } from '../../../utils/validators';
import editCommentStyles from '../editComment/EditComment.module.css';
import { useState, useEffect } from 'react';
import * as commentApi from '../../../services/commentsService';

export const EditComment = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        title: '',
    });
    const [value, setValue] = useState({
        title: '',
        postId: '',
        userEmail: '',
    });

    useEffect(() => {
        commentApi.getOneComment(id)
            .then(res => {
                setValue({
                    title: res.title,
                    postId: res.postId,
                    userEmail: res.userEmail,
                })
            })
    },[])

    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if (e.target.name == 'title') {
            setErrors(errors => ({
                ...errors,
                title: editCommValidator(value.title),
            }))
        }
    };

    const onEdit = (e) => {
        e.preventDefault();
        try {
            commentApi.editComment(id, value)
            .then(res => {
                navigate(`/catalog/${value.postId}`)
            })
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <section className={editCommentStyles['edit-comm']}>
            <img src="data:image/png;base64,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" alt="" />
            <form className={editCommentStyles['edit-comm-form']} onSubmit={onEdit}>
                <label htmlFor="title">Edit Your Comment</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={changeHandler}
                    value={value.title}
                    placeholder="Edit Your Comment"
                    onBlur={errorCheck}
                />
                {errors.title}
                <button disabled={editCommBtnValidator(value.title)}>Publish</button>
            </form>
        </section>
    );
};