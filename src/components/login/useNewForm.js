import { useState,useEffect } from "react";
// import { object } from "yup";

const useForm = (callback, validateLogin) => {
    const [values, setValues] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    //new state for errors
    //function that validates these errors
    //pass these errors back to the form
    const handleChange = event => {
        const{name,value}=event.target;

        setValues(
            {
            ...values,
            [name]:value
        });
    };

    const handleSubmit = event  => {
        event.preventDefault();
        //handling errors
        setErrors(validateLogin(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        //check to see if there is no errors
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
            // call our callback
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;