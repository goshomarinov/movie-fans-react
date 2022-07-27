import { Link } from 'react-router-dom';

import homeStyles from '../home/Home.module.css'

export const Home = () => {
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
                <div className={homeStyles['home-list-card']}>
                    <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                </div>

                <div className={homeStyles['home-list-card']}>
                    <img src="https://m.media-amazon.com/images/I/51BGV8AJ4RL._SY445_.jpg" alt="" />
                        <h3>Star Wars: Episode II - Attack of the Clones</h3>
                        <div>
                            <button>Details</button>
                        </div>
                </div>

                <div className={homeStyles['home-list-card']}>
                    <img src="https://cdn.wallpapersafari.com/94/40/IfP0vz.jpg" alt="" />
                        <h3>Star Wars: Episode III - Revenge Of The Sith</h3>
                        <div>
                            <button>Details</button>
                        </div>
                </div>
            </section>
        </main>
    );
};