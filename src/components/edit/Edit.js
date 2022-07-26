import editStyles from '../edit/Edit.module.css';
import { useEffect, useState, } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from '../../services/movieService';
import {
    createBtnValidator,
    descValidator,
    titleValidator,
    urlValidator,
    yearValidator
} from '../../utils/validators';

export const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
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

    useEffect(() => {
        try {
            api.getOneMovie(id)
                .then(res => {
                    setValues(res);
                })
        } catch (err) {
            alert(err.message);
        }
    }, [])

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

    const onCancel = () => {
        navigate(`/catalog/${id}`);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            title,
            imgUrl,
            year,
            description
        } = Object.fromEntries(new FormData(e.target));

        try {
            api.editMovies(id, {
                title,
                imgUrl,
                year,
                description
            }
            )
            navigate(`/catalog/${id}`);
        } catch (err) {
            alert(err.message);
            navigate('/');
        }

    }

    return (
        <section className={editStyles['edit']}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACtCAMAAAAu7/J6AAAAe1BMVEX///8AAAAtLS2QkJB3d3cHBwe9vb2enp47OzvT09Pm5ubW1tby8vJsbGzNzc3e3t6JiYmxsbGXl5fs7OyBgYH5+fmpqalaWlq4uLhxcXF8fHwhISHg4OBBQUFmZmZPT08bGxtgYGAqKioTExPGxsY2NjZKSko+Pj5VVVWi5kZPAAAJS0lEQVR4nO2d16KiMBCGRVlQRKQo9s4p7/+EKykYIE0gHst8V2eFQPhJmcwM2V4PAAAAAAAAAAAAAAAAAAAAAAAAAF6IKBwg/roeT83Kwvx1Pf6a7bigftDGGv17fLWeidS6cakfBpGujBiNrH79OIh0xQWR1HQlUrKdm6jeczDtRCT3cj1nNzJTxSfA7UCkHSn/xtZU4m+9sI1Ip0Llpak6PgVuC5GYCfK9x3ehSBPy+JKyM6bDvu+w1JOINM0ChKTsghEpMlbDJ0AokgYnEEnNgBFp2nG9noo2Im1vGp0lp3nrReg3q92T0EYkZuSWjNtefnzX7AZPQiuRqJ1gOZJzsJJJwzs8Be1E6gX54D2TKjB5/TGrpUgagEgagEgagEgavLNInUVL3lkkG0QqaOMq0QNE0gBE0gBE0uAvRNo68Wy/WNiDNLgvlpME6WBt7+0wdrzbrx2I5MvXZVik7V11bcN8ubdYflzddaOzOrIF/9l02d5epOsVJtwD/ihniv2Xy/EIE7B0H7Lb2ladhYZz2VtzCn5hx2xrkZb5WZyEi/mec9MaHffCRHTThaI1+RNBwVP+HoUi7fVEwmkXYf3AQnDXSuV1H1+LWHKnVFbQlRScSkQ6kHOktZqSs35rR+ZaGlmb+1SQ4n9Jb7UXFpwfpAUzsUjJFuGVf/UH+/1qkEbZeBosB0Pxs2qK1OGisRS3t46nlb3/Lf00FBRMLuxJ6zRapu5kw/w2Tu+r6z/Bw9bP1BqSrLihInUC5qonh/rUfYcZyPkqJbcTvqLbTJK4N53su0RiLqgSqScaCllmd+kgY8xctBJ1SIs3Wx8Vrk2+OLrJKoeyTamyJkTqzf0c4k4Yob+N4Rc1OXj1o0XsizPB7CTHSkEz/e52j0gEPCoaNiaLR3W5h4vxqhaQLiZEfsoH24m1RcpKNmleErVWTs5lARbJ7LKkmMJFUXn/jI9XK1p0DVG8h4kt3jHJJEEWufEgDMNBHAU+bltHSYEfdIbRkFLR2ThGbeWUSibVifwstqLGTUSqgsqLZtecs3mRaJBUtvqgD1saGGk74a+rMNHjRDLZ3WgrkRrVdBAuNSVqH0jXkIsHiNQ3LhIZkXgTPAuZ69mftNT1xCKFwx1CVUOlSBvjIpHliKpHk+x+ZhpzrLpuHFZCkXQDAUqR8GVkyWAtITPUSnXevNbgbE4P5DBWiaR0lWiKVLVmO2SJ7yCe2SiL6msndoHShrs8SCRZ3klLQr0mX/S34n2RpiUz8jDCtVtnIm2qI0HXYGv1GA9UrCq9i3QjsQ+FIvQCdCYSnt34y4VOKC9D1RSDUmZpVi0wLhLu+LzlY0fcqdGtY9anOwFj4yLhtady7mmMpnuPgZqORCR1lMC8SHhO+VHWpCn3i0SdKU8k0krvOs25WyRqLGiLJByTdFNvlCKR1ac5jxu2Yi6L02pihzn1ee32c+y6MTXNicGttk6Es1sUYlQXUIpE3pc5k7vftKmSD4jUs5vwUy5dlCIRa6Q7l38VEnK4PxpMvAfqOWVnXCQyZphLdyc+kAYLH9xRlbE/MjUYFYmETYy53YhNaN9fktRMtXZzHiAScaYbMyepz+3+kmRprApsnR4gUu9ouCntmo561MSSD2c0WGBWJOI5PDS/iZxU61l5THSakv0QkWh/UL7qhulK9Prq5XwVGo+T+aKKoJJZkXo0P0q+lBz3m/rm6Lu+//NNklJxkbyeoUSkJbZVlW9fR6RieSXzuONO08gwL0KMco1H9j6sqEGd/OIHCC2JSJ0tS3IyeiOx4UasnWaGefEkMpXQW/ji39YaCtoSszeQyQVuqS7WRfAYtEc2XOIVKUbilk+CjNV8Cpr5deHGc9j9k4yLxCTiLOq22zyiKQZNc3FuwehvTlZJDs2MqB6+5aNwDDl254MHiFR03/w5UmanHH+cnoojzbMDmVdezU/KGRUNpnaISYlIy31u1Gc1svrzWvaQQKTAqYDLZ6XfuH2mlOtjnQ+T2cw+DctZKi3sTfbyYaW5ON/FIc6Yx+YRrjJa97lzy6RkcypLcw9XJL+aeSOAa3dkqlKbVj6nUgbtcJB5qFn4o5RNTOQaCcmZLdrfh4PBescWYkem0rNxReIlhPPgh+X9k7RQ28WdU7ti7ZWK/Gu8DPmCZVn/Qb1cWSR5EjBTO0Flgr6wiN1+aZf8KKolNqyDs6jMj1fJD2fnT65I37zLcKhaIzecIbfAoBvvbsS9OL2HtOiS+/42aJFQEokd77giSSvBIPOITuNKbvll1WEMPBWEKo+ucmE4mlULTcgwz0wKX6XWyN8/yZEnzxOUo0sydqI0jt1omXW+b179Wa8V0tzeyVuG++HVMP33dZpFN+vS9whVEyAhv3dY/YdxfdYFtcF3dvSSz/Ao/OSld0gBAAAAukNg2BnMnn09Er6/1uvyO9CXx+G7idcGU2dej5Cb2eAbzTF+OQ5ch0JsNDP05bC43+pbTcKj70u+JqwtCHMPibnM0JcDxVprEcTcR6MREPkYkHuhsnhGzmPobjfOHKcZihzIP5z7LHD0pOQtHHE8lB8OUqQUUV/Ufvl40mq72UJDqoM0YSKdKxiR6qCw0W09m5T/CWBQnKFYqoWlfwEE1JSo7YisS7C266AgKPGyoQjvW//PLQ1BifIkMYT5EyiBzG4U5UVd73Ebab4SaLGGdoI5W/ItYT6ZL7LMDTjLXYCAMvdmOGF+/deVeVpQzhjOl4cIgAjUz9zM6nKXw/cD+ZDysQkakhjkRIoCaEhS8ry/S+8IDUkGakoZaCTn1xpPwUWiYGp5Pixt5XjJApYkKvZ2AqakAv+qz14nb/2TiSxrhZrSOp6tIQzAZ5E7bW/fhL70//JjCg8PR+j7tnh55mSaAH6fREiuve67l5vf6h0rP4ngtEExJbKzyAmnB56VG8R+EsWXlCTU5mErYNtku5R3ZYS+8wyZ4P8Ef+G3gpSJgj7yjcyZnC3ShrbW8a/q9GyM8QA9ZzMmFtjL/QUTHCHGnWrLLkdGeP4fNNh45z054eh2Wsp4P6Bl7hIGJcIvznTvl/KRRsjgDmAZRzihPuVUFv+H3GhyoCUR3Lyf+dU40jTPdAtNbs7+UlyntcnyWDMcZ5a1BmuyAKcj1z7B+YX8WxY/Xrkcb2S0hoxAAAAAAAAAAAAAAAAA4AX5D39QYiIS798+AAAAAElFTkSuQmCC"
                alt="" />
            <form className={editStyles['edit-form']} onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={changeHandler}
                    value={values.title}
                    onBlur={errorCheck}
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
                />
                {errors.description}

                <input className={editStyles['edit-btn']}
                    type="submit"
                    value="Edit"
                    disabled={createBtnValidator(values)}
                />

                <input className={editStyles['edit-btn']}
                    type="submit"
                    value="Cancel"
                    onClick={onCancel}
                />
            </form>
        </section>
    );
};