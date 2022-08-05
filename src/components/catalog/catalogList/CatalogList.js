import catalogStyles from '../Catalog.module.css';

export const CatalogList = ({movie}) => {
    console.log(movie)
    return (
        <div className={catalogStyles['catalog-list-card']}>
            <img src={movie.imgUrl} alt="" />
            <h3>{movie.title}</h3>
            <div>
                <button>Details</button>
            </div>
        </div>
    );
}