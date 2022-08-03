import notFoundStyles from '../not-found/NotFound.module.css';

import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/');
    }

    return (
        <section className={notFoundStyles['not-found']}>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/73/49/404-error-page-not-found-miss-paper-with-white-vector-20577349.jpg" alt="" />
            <input
                type="submit"
                className={notFoundStyles['not-found-btn']}
                value="Back Home"
                onClick={clickHandler}
            />
        </section>
    );
}