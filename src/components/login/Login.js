import loginStyles from '../login/Login.module.css';

import { useState } from 'react';

import { usernameValidator, passwordValidator, loginBtnValidator } from '../../utils/validators';

export const Login = () => {
    const [errors, setErrors] = useState({
        userErr: '',
        passErr: '',
    })
    const [values, setValues] = useState({
        username: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if(e.target.name == 'username') {
            setErrors(errors => ({
                ...errors,
                userErr: usernameValidator(values.username),
            }))
        } else if (e.target.name == 'password') {
            setErrors(errors => ({
                ...errors,
                passErr: passwordValidator(values.password),
            }))
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(e.target)))
    }

    return (
        <section className={loginStyles['login']}>
            <img src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" alt="" />
            <form className={loginStyles['login-form']} onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={changeHandler}
                    value={values.username}
                    onBlur={errorCheck}
                    placeholder="Username"
                />
                {errors.userErr}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                    value={values.password}
                    onBlur={errorCheck}
                    placeholder="Password"
                />
                {errors.passErr}

                <input
                    className={loginStyles['login-btn']}
                    type="submit"
                    value="Login"
                    disabled={loginBtnValidator(values)}
                />
            </form>
        </section>
    );
};