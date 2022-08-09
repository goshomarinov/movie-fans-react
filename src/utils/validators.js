const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
const URL_PATTERN = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
export const emailValidator = (email) => {

    if (!EMAIL_PATTERN.test(email)) {
        return (
            <div style={{ color: 'red' }}>Email is not valid</div>
        );
    } else {
        return '';
    }
}

export const passwordValidator = (password) => {
    if (password.length < 6) {
        return (
            <div style={{ color: 'red' }}>Password must be minimum 6 characters long!</div>
        );
    } else {
        return '';
    }
}

export const repassValidator = (values) => {
    if (values.rePassword.length < 6) {
        return (
            <div style={{ color: 'red' }}>Repeat password must be minimum 6 characters long!</div>
        );
    } else if (values.rePassword != values.password) {
        return (
            <div style={{ color: 'red' }}>Passwords don't match</div>
        );
    } else {
        return '';
    }
}

export const searchValidator = (value) => {
    if (value.length < 4) {
        return (
            <div style={{ color: 'red' }}>Search Input must be minimum 4 characters long!</div>
        );
    } else {
        return '';
    }
}

export const searchBtnValidator = (value) => {
    if (value.length < 4) {
        return true;
    } else {
        return false;
    }
}

export const addCommValidator = (value) => {
    if (value.length < 3) {
        return (
            <div style={{ color: 'red' }}>Comment Input must be minimum 3 characters long!</div>
        );
    } else {
        return '';
    }
}

export const addCommBtnValidator = (value) => {
    if (value.length < 3) {
        return true;
    } else {
        return false;
    }
}

export const editCommValidator = (value) => {
    if (value.length < 3) {
        return (
            <div style={{ color: 'red' }}>Comment Input must be minimum 3 characters long!</div>
        );
    } else {
        return '';
    }
}

export const editCommBtnValidator = (value) => {
    if (value.length < 3) {
        return true;
    } else {
        return false;
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

export const createBtnValidator = (values) => {
    if (!URL_PATTERN.test(values.imgUrl)
        || values.title.length < 4
        || values.description.length < 10
        || values.year.length > 4
        || values.year.length < 4
        || Number(values.year) < 1920
        || Number(values.year) > 2022) {
        return true;
    } else {
        return false;
    }
}

export const titleValidator = (title) => {

    if (title.length < 4) {
        return (
            <div style={{ color: 'red' }}>Title must bi minimum 4 characters long!</div>
        );
    } else {
        return '';
    }
}

export const descValidator = (description) => {

    if (description.length < 10) {
        return (
            <div style={{ color: 'red' }}>Description must bi minimum 10 characters long!</div>
        );
    } else {
        return '';
    }
}

export const urlValidator = (url) => {

    if (!URL_PATTERN.test(url)) {
        return (
            <div style={{ color: 'red' }}>Image Url is invalid</div>
        );
    } else {
        return '';
    }
}

export const yearValidator = (year) => {
    const temp = Number(year);

    if (temp < 1920 || temp > 2022 || temp.length > 4 || temp.length < 4) {
        return (
            <div style={{ color: 'red' }}>Year is invalid</div>
        );
    } else {
        return '';
    }
}
