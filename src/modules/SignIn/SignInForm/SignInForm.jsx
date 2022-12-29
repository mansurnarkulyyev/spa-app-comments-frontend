// import React, { useState } from 'react'
import { Link } from "react-router-dom";
import FormInput from "../../../shared/components/FormInput/FormInput";
import useForm from "../../../shared/hooks/useForm";
import s from "../../SignUp/SignUpForm/signUpForm.module.scss";
import { fields } from "./fields";
import { initialState } from "./initialState";

function SignInForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

  // const [submitting, setSubmitting] = useState(false);

  const { name, email, password } = state;


  return (
    <div className={s.container}>
      <form className={s.form} >
        <h1 className={s.form__title}>Login</h1>
        <FormInput value={name} onChange={handleChange}  {...fields.email} />
        <FormInput value={name} onChange={handleChange} {...fields.password} />
        {/* <div className={s.form__input__group}>
          <input type="text" className={s.form__input} autofocus placeholder="Username or Email" />
        </div>
        <div className={s.form__input__group}>
          <input type="password" className={s.form__input} autofocus placeholder="Password" />
        </div> */}
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

