import registerStyles from '../register/Register.module.css';

export const Register = () => {
    return(
        <section className={registerStyles['register']}>
        <img src="https://st.depositphotos.com/2036511/3067/v/450/depositphotos_30675099-stock-illustration-round-register-now-button.jpg" alt=""/>
        <form className={registerStyles['register-form']}>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" value="" placeholder="Username"/>
            <label for="password">Password</label>
            <input type="text" id="password" name="password" value="" placeholder="Password"/>
            <label for="rePassword">Password</label>
            <input type="text" id="rePassword" name="rePassword" value="" placeholder="Repeat Password"/>
            <input className={registerStyles['register-btn']} type="submit" value="Register"/>
        </form>
    </section>
    );
};