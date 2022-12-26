
import React from 'react'
import s from "./signUpForm.module.scss";
import { fields } from "./fields";
import { initialState } from "./initialState";
import FormInput from "../../../shared/components/FormInput/FormInput";
import useForm from '../../../shared/hooks/useForm';
// import Captcha from './Captcha/Captcha';

function SignUpForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

  const { name, email, password } = state;


  return (

    <form onSubmit={handleSubmit} className={s.form}>
      {/* <FormTextField type="checkbox" value={name} onChange={handleChange} {...fields.name} />  */}
      <FormInput value={name} onChange={handleChange} {...fields.name} />
      <FormInput value={email} onChange={handleChange} {...fields.email} />
      <FormInput value={password} onChange={handleChange} {...fields.password} />
      <button type="submit">Register</button>
    </form>
  )
}

export default SignUpForm;

