import catalogStyles from '../catalog/Catalog.module.css'

export const Catalog = () => {
    return (
        <>
            <h2 className={catalogStyles['all-records']}>All Movies</h2>
            <section className={catalogStyles['catalog']}>
                <ul className={catalogStyles['catalog-list']}>
                    <div className={catalogStyles['catalog-list-card']}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className={catalogStyles['catalog-list-card']}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className={catalogStyles['catalog-list-card']}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className={catalogStyles['catalog-list-card']}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                    </div>

                    <div className={catalogStyles['catalog-list-card']}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg" alt="" />
                        <h3>Star Wars: Episode I - The Phantom Menace</h3>
                        <div>
                            <button>Details</button>
                        </div>
                    </div>
                </ul>
            </section>
        </>
    );
};