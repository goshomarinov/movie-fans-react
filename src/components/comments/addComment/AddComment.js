import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import { addCommBtnValidator, addCommValidator } from '../../../utils/validators';
import addCommentStyles from '../addComment/AddComment.module.css';
import * as commentApi from '../../../services/commentsService';

export const AddComment = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        comm: '',
    });
    const [value, setValue] = useState({
        comm: '',
    });
    const { userData } = useContext(UserContext);
    const { id } = useParams();

    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if (e.target.name == 'comm') {
            setErrors(errors => ({
                ...errors,
                comm: addCommValidator(value.comm),
            }))
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        const title = Object.fromEntries(new FormData(e.target));

        const data = {
            title: title.comm,
            userEmail: userData.email,
            postId: id,
        }

        try {
            commentApi.createComment(data)
            .then(res => {
                navigate(`/catalog/${id}`)
            })
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <section className={addCommentStyles['add-comm']}>
            <img src="https://thumbs.dreamstime.com/b/comment-conversation-icon-premium-red-tag-sign-isolated-abstract-illustration-127877240.jpg" alt="" />
            <form className={addCommentStyles['add-comm-form']} onSubmit={onSubmit}>
                <label htmlFor="comm">Enter Your Comment</label>
                <input
                    type="text"
                    id="comm"
                    name="comm"
                    onChange={changeHandler}
                    value={value.comm}
                    onBlur={errorCheck}
                    placeholder="Comment Here"
                />
                {errors.comm}
                <button disabled={addCommBtnValidator(value.comm)}>Publish</button>
            </form>
        </section>
    );
};