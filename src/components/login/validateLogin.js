export default function validateLogin(values) {
    let errors = {};
//email 
    //the string to be more than zero characters 
    // the string to be an email
    if (!values.email) {
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }
//password
    //more than 12 characters
    if (!values.password) {
        errors.password = " password is required";
    }else if (values.password.length < 12) {
        errors.password = "password needs to be more than 12 characters";
    }
    return errors;
}