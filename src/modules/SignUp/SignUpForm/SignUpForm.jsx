
import s from "./signUpForm.module.scss";


import React, { useState } from 'react'

function SignUpForm() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit({ ...state });
    setState({
      email: "",
      password: ""
    })
  }
  // const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input value={state.email} name="name" type="text" onChange={handleChange} placeholder="type your name" />
      <input value={state.email} name="email" type="text" onChange={handleChange} placeholder="type your email" />
      <input value={state.password} name="password" type="text" onChange={handleChange} placeholder="type your password" />
      <button>signUp</button>
    </form>
  )
}

export default SignUpForm