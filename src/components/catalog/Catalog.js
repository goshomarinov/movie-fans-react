import catalogStyles from '../catalog/Catalog.module.css';

import { CatalogList } from './catalogList/CatalogList';

import { useEffect, useState } from 'react';
import * as api from '../../services/movieService';
import { paginator } from '../../utils/paginator';
import { PaginationBtn } from './PaginationBtn';

export const Catalog = () => {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState(Number);
    const [buttons, setButtons] = useState([]);
    const [pagination, setPagination] = useState({
        offset: 0,
        pageSize: 3
    });

    useEffect(() => {
        try {
            Promise.all([
                api.getAllmovies(),
                api.getPaginatedMovies(pagination.offset, pagination.pageSize)
            ])
                .then(res => {
                    setPages(Math.ceil(res[0].length / 3))
                    setMovies(state => [...res[1]])
                })
            setButtons(() => paginator(pages))
        } catch (err) {
            alert(err.message);
        }
    }, [pages])

    const paginPage = (e) => {
        const page = Number(e.target.textContent)
        const newPage = (page * 3) - 3;
        api.getPaginatedMovies(newPage, pagination.pageSize)
            .then(movie => {
                setMovies(state => [...movie])
                setPagination({ pageSize: 3, offset: newPage })
            })
    }
    return (
        <>
            <h2 className={catalogStyles['all-records']}>All Movies</h2>
            <section className={catalogStyles['catalog']}>
                <ul className={catalogStyles['catalog-list']}>
                    {movies.length > 0
                        ? movies.map(movie => < CatalogList key={movie._id} movie={movie} />)
                        : <h2 className={catalogStyles['no-records']}>No Records Found</h2>
                    }
                </ul>
            </section>
            {buttons.length > 1
                ? <div className={catalogStyles['pages']}>
                    {buttons.map(i => <PaginationBtn value={i} key={i.index} paginPage={paginPage} />)}
                </div>

                : null
            }
        </>
    );
};