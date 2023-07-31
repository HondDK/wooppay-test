import {useState} from 'react';


const useFormInput = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};

export default useFormInput;