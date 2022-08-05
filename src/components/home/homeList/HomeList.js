
import homeStyles from '../Home.module.css';


export const HomeList = ({movie}) => {
    return (
        <div className={homeStyles['home-list-card']}>
        <img src={movie.imgUrl} alt="" />
            <h3>{movie.title}</h3>
            <div>
                <button>Details</button>
            </div>
    </div>
    );
}