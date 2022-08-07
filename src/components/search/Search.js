import { searchBtnValidator, searchValidator } from '../../utils/validators';
import searchStyles from '../search/Search.module.css';
import { SearchItem } from './searchItem/SearchItem';
import { useState } from 'react';
import * as api from '../../services/movieService';

export const Search = () => {
    const [result, setResult] = useState([]);
    const [errors, setErrors] = useState({
        search: '',
    });

    const [value, setValue] = useState({
        search: '',
    });

    const changeHandler = (e) => {
        setValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if (e.target.name == 'search') {
            setErrors(errors => ({
                ...errors,
                search: searchValidator(value.search),
            }))
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            search,
        } = Object.fromEntries(new FormData(e.target));

        try {
            api.getResultSearch(search)
                .then(res => {
                    setResult(res);
                })
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <>
            <h2 className={searchStyles['search-heading']}>Search in Catalog</h2>
            <section className={searchStyles['search']}>
                <img src="https://vivaldi.com/wp-content/uploads/Quickly-search-for-information-online-980x551.png" alt="" />
                <form onSubmit={onSubmit}>
                    <label htmlFor="search">Search</label>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        onChange={changeHandler}
                        value={value.search}
                        onBlur={errorCheck}
                        placeholder="Search Movie"
                    />

                    <input
                        className={searchStyles['search-btn']}
                        type="submit"
                        value="Search"
                        disabled={searchBtnValidator(value.search)}
                    />
                </form>
                {errors.search}

                <section className={searchStyles['search-result']}>
                    <ul className={searchStyles['search-items']}>
                        {result.length > 0
                            ? result.map(m => <SearchItem key={m._id} movie={m} />)
                            : <h2 className={searchStyles['no-items']}>No Records Found Try Again!</h2>
                        }
                    </ul>
                </section>
            </section>
        </>
    );
};