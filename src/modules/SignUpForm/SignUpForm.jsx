import { fields } from "./fields";
import { initialState } from "./initialState";
import FormInput from "../../shared/components/FormInput/FormInput";
import { Link } from "react-router-dom";
import useForm from "../../shared/hooks/useForm";
import s from "./signUpForm.module.scss";
import Captcha from "./Captcha/Captcha";

function SignUpForm({ onSubmit }) {
  const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
  // ******

  // const [submitting, setSubmitting] = useState(false);
  // const elements = captcha.map(({ svg, text, message }) => <div>
  //   <svg className={s.svg}>
  //     <use href={svg}>{text}</use>
  //     {message}
  //   </svg>
  // </div>
  // )
  // ******
  const { name, email, password } = state;

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form} >
        <h1 className={s.form__title}>Create Account</h1>

        <FormInput value={name} onChange={handleChange} {...fields.name} />
        <FormInput value={email} onChange={handleChange}  {...fields.email} />
        <FormInput value={password} onChange={handleChange} {...fields.password} />

        {/* <svg className={s.svg}>
            <use href={captcha}>{captcha}</use>
          </svg> */}
        <Captcha type="submit" />
        <p className={s.form__text}>
          Already have an account?
          <Link className={s.form__link} to="/login" id="linkCreateAccount"> Sign in</Link>
        </p>
      </form>
    </div >
  )
}

export default SignUpForm;



//FormInput inside
// <div className={s.form__input__group}>
//   <label htmlFor={nameId}>Password:</label>
//   <input type="password" className={s.form__input} id={nameId} required value={name} onChange={handleChange} placeholder="Password" />
// </div> 