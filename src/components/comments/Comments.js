import commentsStyles from '../comments/Comments.module.css';

import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

export const Comments = ({ comment }) => {
    const { userData } = useContext(UserContext);


    let commAuthorCheck = false;

    if (userData) {
        if (userData._id == comment._ownerId) {
            commAuthorCheck = true;
        } else {
            commAuthorCheck = false;
        }
    }

    return (
        <section className={commentsStyles['comments']}>
            <p className={commentsStyles['user']}>User: {comment.userEmail}</p>
            <p className={commentsStyles['comment-item']}>Comment: {comment.title}</p>
            <div className={commentsStyles['btns']}>
                {commAuthorCheck
                    ? <>
                        <Link
                            to={`/catalog/details/comment/edit/${comment._id}`}
                            className={commentsStyles['edit']}
                        >Edit
                        </Link>
                        <Link
                            to={`/catalog/details/comment/delete/${comment._id}`}
                            className={commentsStyles['del']} comment={comment}
                        >Delete
                        </Link>
                    </>
                    : null
                }

            </div>
        </section>
    );
};