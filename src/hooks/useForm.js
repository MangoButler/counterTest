import { useState } from "react";

const useForm = (validateValue) =>{
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) =>{
        setValue(event.target.value);
    };

    const inputBlurHandler = (event) =>{
        setIsTouched(true);
    };

    const reset = () => {
        setIsTouched(false);
        setValue('');
    }

    return {
        value,
        hasError,
        valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }


};

export default useForm;