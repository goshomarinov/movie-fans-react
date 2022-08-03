const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
export const emailValidator = (email) => {

    if (!EMAIL_PATTERN.test(email)) {
        return (
            <span style={{ color: 'red' }}>Email is not valid</span>
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
    if (!EMAIL_PATTERN.test(values.email) || values.password.length < 6) {
        return true;
    } else {
        return false;
    }
}

export const registerBtnValidator = (values) => {
    if (!EMAIL_PATTERN.test(values.email)
        || values.password.length < 6
        || values.rePassword.length < 6
        || values.rePassword != values.password) {
        return true;
    } else {
        return false;
    }
}
