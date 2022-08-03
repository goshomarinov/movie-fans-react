export const usernameValidator = (username) => {
    if (username.length < 4) {
        return(
            <span style={{ color: 'red' }}>Username must be minimum 4 characters long!</span>
        );
    } else {
        return '';
    }
}

export const passwordValidator = (password) => {
    if (password.length < 6) {
        return(
            <span style={{ color: 'red' }}>Password must be minimum 6 characters long!</span>
        );
    } else {
        return '';
    }
}

export const loginBtnValidator = (values) => {
    if(values.username.length < 4 || values.password.length < 6) {
        return true;
    } else {
        return false;
    }
}