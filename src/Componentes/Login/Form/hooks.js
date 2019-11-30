import { useState } from 'react';

const useForm =()=>{
    const [values,setValues] = useState({});
    const [loading,setLoading] = useState(false);

    const handleChange =(e)=>{
        const auxValue = {...values};
        auxValue[e.target.name] = e.target.value;
        setValues(auxValue)
    }
    const handleSubmit = callback => e=>{
        e.preventDefault();
        setLoading(true);
        callback();
        setLoading(false);
    }
    return[{values,loading},handleChange,handleSubmit];
}
export default useForm;