// import React, { useState } from 'react'
import { fields } from "./fields";
import { initialState } from "./initialState";
import FormInput from "../../../shared/components/FormInput/FormInput";
import { Link } from "react-router-dom";
import useForm from "../../../shared/hooks/useForm";
import s from "./signUpForm.module.scss";

function SignUpForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

  // const [submitting, setSubmitting] = useState(false);

  const { name, email, password } = state;



  //default captcha plug funct
  const characters = 'abc123';
  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6)

  return (

    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form} >
        <h1 className={s.form__title}>Create Account</h1>

        <FormInput value={name} onChange={handleChange} {...fields.name} />
        <FormInput value={name} onChange={handleChange}  {...fields.email} />
        <FormInput value={name} onChange={handleChange} {...fields.password} />
        {/* <div className={s.form__input__group}>
          <label htmlFor={nameId}>Name:</label>
          <input type="text" className={s.form__input} id={nameId} required value={name} onChange={handleChange} placeholder="Username or Email" />
        </div>
        <div className={s.form__input__group}>
          <label htmlFor={nameId}>Email:</label>
          <input type="email" className={s.form__input} id={nameId} required value={name} onChange={handleChange} placeholder="email" />
        </div>
        <div className={s.form__input__group}>
          <label htmlFor={nameId}>Password:</label>
          <input type="password" className={s.form__input} id={nameId} required value={name} onChange={handleChange} placeholder="Password" />
        </div> */}
        <div className={s.form__input__group}>
          <h4 id="captcha" style={{ width: "100px", textAlign: "center", padding: "20px", background: "lightgrey" }}>{captcha}</h4>
          <FormInput value={name} onChange={handleChange} {...fields.captcha} />
          {/* <label htmlFor={nameId}>Captcha:</label> */}
          {/* <input type="text" className={s.form__input} id={nameId} required value={name} onChange={handleChange} placeholder="Enter Captcha" autoComplete="off" /> */}
        </div>
        <button className={s.form__button} type="submit"> Continue </button>

        <p className={s.form__text}>
          Already have an account?
          <Link className={s.form__link} to="/login" id="linkCreateAccount"> Sign in</Link>
        </p>
      </form>
    </div >
  )
}

export default SignUpForm;

