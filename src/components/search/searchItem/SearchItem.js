import { Link } from "react-router-dom";


import searchStyles from '../../search/Search.module.css';

export const SearchItem = ({movie}) => {
    return (
        <div className={searchStyles['search-items-card']}>
            <img src={movie.imgUrl} alt="" />
            <h3>{movie.title}</h3>
            <div>
                <Link to={`/catalog/${movie._id}`}>Details</Link>
            </div>
        </div>
    );
};