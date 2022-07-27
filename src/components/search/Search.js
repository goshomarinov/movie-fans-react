import searchStyles from '../search/Search.module.css';

export const Search = () => {
    return (
        <>
            <h2 className={searchStyles['search-heading']}>Search in Catalog</h2>
            <section className={searchStyles['search']}>
                <img src="https://vivaldi.com/wp-content/uploads/Quickly-search-for-information-online-980x551.png" alt="" />
                <form>
                    <label htmlfor="search">Search</label>
                    <input type="text" id="search" name="search" placeholder="Search Movie" />
                    <input className={searchStyles['search-btn']} type="submit" value="Search" />
                </form>

                <section className={searchStyles['search-result']}>
                    <h2 className={searchStyles['no-items']}>No Records Found Try Again!</h2>
                    <ul className={searchStyles['search-items']}>
                        <div className={searchStyles['search-items-card']}>
                            <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                            <h3>Star Wars: Episode I - The Phantom Menace</h3>
                            <div>
                                <button>Details</button>
                            </div>
                        </div>

                        <div className={searchStyles['search-items-card']}>
                            <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                            <h3>Star Wars: Episode I - The Phantom Menace</h3>
                            <div>
                                <button>Details</button>
                            </div>
                        </div>

                        <div className={searchStyles['search-items-card']}>
                            <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                            <h3>Star Wars: Episode I - The Phantom Menace</h3>
                            <div>
                                <button>Details</button>
                            </div>
                        </div>

                        <div className={searchStyles['search-items-card']}>
                            <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                            <h3>Star Wars: Episode I - The Phantom Menace</h3>
                            <div>
                                <button>Details</button>
                            </div>
                        </div>
                    </ul>
                </section>
            </section>
        </>
    );
};