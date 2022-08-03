import registerStyles from '../register/Register.module.css';

import { useState } from 'react';
import {
    repassValidator,
    usernameValidator,
    passwordValidator,
    registerBtnValidator
} from '../../utils/validators';

export const Register = () => {
    const [errors, setErrors] = useState({
        userErr: '',
        passErr: '',
        rePassErr: '',
    })
    const [values, setValues] = useState({
        username: '',
        password: '',
        rePassword: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if (e.target.name == 'username') {
            setErrors(errors => ({
                ...errors,
                userErr: usernameValidator(values.username),
            }))
        } else if (e.target.name == 'password') {
            setErrors(errors => ({
                ...errors,
                passErr: passwordValidator(values.password),
            }))
        } else if (e.target.name == 'rePassword') {
            setErrors(errors => ({
                ...errors,
                rePassErr: repassValidator(values),
            }))
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(e.target)))
    };

    return (
        <section className={registerStyles['register']}>
            <img src="https://st.depositphotos.com/2036511/3067/v/450/depositphotos_30675099-stock-illustration-round-register-now-button.jpg" alt="" />
            <form className={registerStyles['register-form']} onSubmit={onSubmit}>
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
                    type="text"
                    id="password"
                    name="password"
                    onChange={changeHandler}
                    value={values.password}
                    onBlur={errorCheck}
                    placeholder="Password"
                />
                {errors.passErr}

                <label htmlFor="rePassword">Repeat Password</label>
                <input
                    type="text"
                    id="rePassword"
                    name="rePassword"
                    onChange={changeHandler}
                    value={values.rePassword}
                    onBlur={errorCheck}
                    placeholder="Repeat Password"
                />
                {errors.rePassErr}

                <input
                    className={registerStyles['register-btn']}
                    type="submit"
                    value="Register"
                    disabled={registerBtnValidator(values)}
                />
            </form>
        </section>
    );
};