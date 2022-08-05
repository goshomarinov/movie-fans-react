import createStyles from '../create/Create.module.css';
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../services/movieService';
import {
    createBtnValidator,
    descValidator,
    titleValidator,
    urlValidator,
    yearValidator
} from '../../utils/validators';


export const Create = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({
        title: '',
        imgUrl: '',
        year: '',
        description: '',
    });

    const [values, setValues] = useState({
        title: '',
        imgUrl: '',
        year: '',
        description: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if (e.target.name == 'title') {
            setErrors(errors => ({
                ...errors,
                title: titleValidator(values.title),
            }))
        } else if (e.target.name == 'imgUrl') {
            setErrors(errors => ({
                ...errors,
                imgUrl: urlValidator(values.imgUrl),
            }))
        } else if (e.target.name == 'year') {
            setErrors(errors => ({
                ...errors,
                year: yearValidator(values.year),
            }))
        } else if (e.target.name == 'description') {
            setErrors(errors => ({
                ...errors,
                description: descValidator(values.description),
            }))
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            imgUrl,
            year,
            description
        } = Object.fromEntries(new FormData(e.target));

        try {
            api.createMovie({
                title,
                imgUrl,
                year,
                description
            }
            )
            navigate('/catalog');
        } catch (err) {
            alert(err.message);
            navigate('/');
        }

    }

    return (
        <section className={createStyles['create']}>
            <img src="data:image/png;base64,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" alt="" />
            <form className={createStyles['create-form']} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={changeHandler}
                    value={values.title}
                    onBlur={errorCheck}
                    placeholder="Title"
                />
                {errors.title}

                <label htmlFor="imgUrl">Image</label>
                <input
                    type="text"
                    id="imgUrl"
                    name="imgUrl"
                    onChange={changeHandler}
                    value={values.imgUrl}
                    onBlur={errorCheck}
                    placeholder="Image URL"
                />
                {errors.imgUrl}

                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    onChange={changeHandler}
                    value={values.year}
                    onBlur={errorCheck}
                    placeholder="Year between 1920 and 2022"
                />
                {errors.year}

                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={changeHandler}
                    value={values.description}
                    onBlur={errorCheck}
                    placeholder="Description"
                />
                {errors.description}

                <input
                    className={createStyles['create-btn']}
                    type="submit"
                    value="Create"
                    disabled={createBtnValidator(values)}
                />
            </form>
        </section>
    );
};