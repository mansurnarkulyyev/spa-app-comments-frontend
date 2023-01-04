import { useState } from "react";
import PropTypes from "prop-types";

const useForm = ({ onSubmit, initialState }) => {
  const [state, setState] = useState({ ...initialState });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validateEmail = ({ target }) => {
    const emailRight = String(target.value)
      .toLowerCase()
      .match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
    if (!emailRight) {
      setErrorEmail("error, try again");
    }
  };
  const validatePassword = ({ target }) => {
    const passwordRight = String(target.value).toLowerCase();
    // .match(/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/);
    if (!passwordRight) {
      setErrorPassword("error, try again");
    }
  };

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    let newValue = type === "checkbox" ? checked : value;
    if (type === "file") {
      newValue = target.files[0];
    }

    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });
    reset();
  };
  const reset = () => {
    setState({
      ...initialState,
    });
  };

  return {
    state,
    setState,
    handleChange,
    handleSubmit,
    reset,
    errorEmail,
    errorPassword,
    validateEmail,
    validatePassword,
  };
};

export default useForm;

useForm.defaultProps = {
  onSubmit: () => {},
  initialState: {},
};
useForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};


