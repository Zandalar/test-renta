import React from 'react';

const useValidator = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
    setErrors({ ...errors, [evt.target.name]: evt.target.validationMessage });
    setIsValid(evt.target.closest('form').checkValidity());
  }

  return {
    values, errors, isValid, handleChange
  };
}

export default useValidator;
