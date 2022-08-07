import catalogStyles from '../catalog/Catalog.module.css';

import { CatalogList } from './catalogList/CatalogList';

import { useEffect, useState } from 'react';
import * as api from '../../services/movieService';

export const Catalog = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            api.getAllmovies()
            .then(movies => {
                setMovies(movies)
            })
        } catch (err) {
            alert(err.message);
        }
    }, [])
    
    return (
        <>
            <h2 className={catalogStyles['all-records']}>All Movies</h2>
            <section className={catalogStyles['catalog']}>
                <ul className={catalogStyles['catalog-list']}>
                    {movies.length > 0 
                           ? movies.map(movie =>  < CatalogList key={movie._id} movie={movie} />)
                           : <h2 className={catalogStyles['no-records']}>No Records Found</h2>
                    }
                </ul>
            </section>
        </>
    );
};