import catalogStyles from '../catalog/Catalog.module.css';

import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import { CatalogList } from './catalogList/CatalogList';

export const Catalog = () => {
    const  movies  = useContext(MovieContext);
    return (
        <>
            <h2 className={catalogStyles['all-records']}>All Movies</h2>
            <section className={catalogStyles['catalog']}>
                <ul className={catalogStyles['catalog-list']}>
                    {movies.map(movie =>  < CatalogList key={movie._id} movie={movie}/>)}
                </ul>
            </section>
        </>
    );
};