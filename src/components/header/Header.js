import { Link } from 'react-router-dom';

import  headerStyles from '../header/Header.module.css'

export const Header = () => {
    return (
        <header className={headerStyles['header-el']}>
            <section className={headerStyles['logo']}>
                <i className="fa-solid fa-video"></i>
                <h1><Link to="/">MOVIE FANS</Link></h1>
            </section>


            <nav className={headerStyles['nav-bar']}>
                <ul className={headerStyles['list']}>
                    <li className={headerStyles['list-item']}>
                        <Link to="/">Home</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/search">Search</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/catalog">Movies</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/create">Add Movie</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/login">Login</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/register">Register</Link>
                    </li>

                    <li className={headerStyles['list-item']}>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};