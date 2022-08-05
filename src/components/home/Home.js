import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../services/movieService';

import homeStyles from '../home/Home.module.css';
import { HomeList } from './homeList/HomeList';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            api.getAllmovies()
            .then(result => { 
                const recent = result.slice(0, 3);
                setMovies(recent);
            })
        } catch (err) {
            alert(err.message);
        }
    }, []);

    return (
        <main>
            <section className={homeStyles['home']}>
                <img src="https://cdn.vox-cdn.com/thumbor/IzvNSzcQHD01uY2Fe-CHzknSQFM=/0x0:1347x1534/1400x1050/filters:focal(557x781:771x995):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66748200/skywalker_saga_now_streaming_final_7b3070d1.0.jpeg"
                    alt="" />
                    <h1>Welcome, here you can post or comment your favorite movies</h1>
                    <Link to="/catalog" className={homeStyles['all']}>All Movies</Link>
                    <Link to="/create" className={homeStyles['add']}>Add Movie</Link>
            </section>

            <h2 className={homeStyles['recent']}>Most Recent Posts</h2>

            <section className={homeStyles['home-list']}>
                {movies 
                       ? movies.map(movie => <HomeList movie={movie} key={movie._id} />)
                       : <h2>No Records Found</h2>
                }
            </section>
        </main>
    );
};