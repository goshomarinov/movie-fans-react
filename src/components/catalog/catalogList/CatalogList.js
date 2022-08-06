import catalogStyles from '../Catalog.module.css';
import { Link } from 'react-router-dom';


export const CatalogList = ({movie}) => {
    
    return (
        <div className={catalogStyles['catalog-list-card']}>
            <img src={movie.imgUrl} alt="" />
            <h3>{movie.title}</h3>
            <div>
                <Link to={`/catalog/${movie._id}`} id={movie._id}>Details</Link>
            </div>
        </div>
    );
}