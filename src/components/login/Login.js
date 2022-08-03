import loginStyles from '../login/Login.module.css';

import { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import * as userApi from '../../services/userService';

import { emailValidator, passwordValidator, loginBtnValidator } from '../../utils/validators';

export const Login = () => {
    const { userLogin } = useContext(UserContext);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        userErr: '',
        passErr: '',
    })
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const errorCheck = (e) => {
        if(e.target.name == 'email') {
            setErrors(errors => ({
                ...errors,
                userErr: emailValidator(values.email),
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
        
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        try {
           userApi.login(email, password)
           .then(user => {
               userLogin(user);
               navigate('/')
           })

        } catch(err) {
            alert(err.message)
        }
    }

    return (
        <section className={loginStyles['login']}>
            <img src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" alt="" />
            <form className={loginStyles['login-form']} onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
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