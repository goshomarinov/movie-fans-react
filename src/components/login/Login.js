import loginStyles from '../login/Login.module.css';

export const Login = () => {
    return(
        <section className={loginStyles['login']}>
        <img src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" alt=""/>
        <form className={loginStyles['login-form']}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" value="" placeholder="Username"/>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" value="" placeholder="Password"/>
            <input className={loginStyles['login-btn']} type="submit" value="Login"/>
        </form>
    </section>
    );
};