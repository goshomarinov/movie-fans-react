import homeStyles from '../Home.module.css';
import { Link } from 'react-router-dom';

export const HomeList = ({movie}) => {
    return (
        <div className={homeStyles['home-list-card']}>
        <img src={movie.imgUrl} alt="" />
            <h3>{movie.title}</h3>
            <div>
                <Link to={`/catalog/${movie._id}`}>Details</Link>
            </div>
    </div>
    );
}