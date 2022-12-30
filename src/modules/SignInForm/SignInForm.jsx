// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../shared/components/FormInput/FormInput";
import useForm from "../../shared/hooks/useForm";
import s from "../SignUpForm/signUpForm.module.scss";
import { fields } from "./fields";
import { initialState } from "./initialState";

function SignInForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

  const { email, password } = state;

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form} >
        <h1 className={s.form__title}>Login</h1>
        <FormInput value={email} onChange={handleChange}  {...fields.email} />
        <FormInput value={password} onChange={handleChange} {...fields.password} />

        <button className={s.form__button} type="submit"> Continue </button>

        <p className={s.form__text}>
          Forgot your:
          <Link to="#" className={s.form__link}> Password?</Link>
        </p>
        <p className={s.form__text}>
          Don't have an account:
          <Link className={s.form__link} to="/register" id="linkCreateAccount"> Create Account?</Link>
        </p>
      </form>
    </div >
  )
}

export default SignInForm;

