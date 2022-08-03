import registerStyles from '../register/Register.module.css';

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import * as userApi from '../../services/userService';
import {
    repassValidator,
    emailValidator,
    passwordValidator,
    registerBtnValidator
} from '../../utils/validators';

export const Register = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        userErr: '',
        passErr: '',
        rePassErr: '',
    });
    const [values, setValues] = useState({
        email: '',
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
        if (e.target.name == 'email') {
            setErrors(errors => ({
                ...errors,
                userErr: emailValidator(values.email),
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

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        
        try {
           userApi.register(email, password)
           .then(user => {
               userLogin(user);
               navigate('/')
           })

        } catch(err) {
            alert(err.message)
        }
    };

    return (
        <section className={registerStyles['register']}>
            <img src="https://st.depositphotos.com/2036511/3067/v/450/depositphotos_30675099-stock-illustration-round-register-now-button.jpg" alt="" />
            <form className={registerStyles['register-form']} onSubmit={onSubmit}>
                <label htmlFor="email">Username</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    value={values.email}
                    onBlur={errorCheck}
                    placeholder="Email"
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

                <label htmlFor="rePassword">Repeat Password</label>
                <input
                    type="password"
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