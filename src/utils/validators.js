export const usernameValidator = (username) => {
    if (username.length < 4) {
        return (
            <span style={{ color: 'red' }}>Username must be minimum 4 characters long!</span>
        );
    } else {
        return '';
    }
}

export const passwordValidator = (password) => {
    if (password.length < 6) {
        return (
            <span style={{ color: 'red' }}>Password must be minimum 6 characters long!</span>
        );
    } else {
        return '';
    }
}

export const repassValidator = (values) => {
    if (values.rePassword.length < 6) {
        return (
            <span style={{ color: 'red' }}>Repeat password must be minimum 6 characters long!</span>
        );
    } else if (values.rePassword != values.password) {
        return (
            <span style={{ color: 'red' }}>Passwords don't match</span>
        );
    } else {
        return '';
    }
}
export const loginBtnValidator = (values) => {
    if (values.username.length < 4 || values.password.length < 6) {
        return true;
    } else {
        return false;
    }
}

export const registerBtnValidator = (values) => {
    if (values.username.length < 4
        || values.password.length < 6
        || values.rePassword.length < 6
        || values.rePassword != values.password) {
        return true;
    } else {
        return false;
    }
}
