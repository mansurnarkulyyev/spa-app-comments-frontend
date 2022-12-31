import React, { useState } from 'react';
import s from "../signUpForm.module.scss";

function Captcha({ type }) {
  const [user, setUser] = useState({
    username: "",
    userCaptcha: false
  });
  const characters = 'abc123';
  function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6) // Function called here and save in captcha variable
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  }


  const onCaptcha = e => {
    let element = document.getElementById("successBTN");
    let inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    let myFunctions = function () {
      if (captcha === user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
        setUser(prevState => ({
          ...prevState,
          userCaptcha: true,
        }));
      }
      else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        let myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = 'sssss';
        };
        setTimeout(myFunction, 2000);
      }
    }
    setTimeout(myFunctions, 2000);
  };

  return (
    <div className="container">
      <h4><b> Please enter Captcha </b></h4>
      <div>
        <h4 id="captcha" style={{ width: "100px", textAlign: "center", padding: "20px", background: "lightgrey" }}>{captcha}</h4>
        <div >
          <div className={s.form__input__group}>
            <label>Captcha:</label>
            <input type="text" id="inputType" placeholder="Enter Captcha" className={s.form__input} name="username" onChange={handleChange} autoComplete="off" />
          </div>
          <button type="button" className={s.captchaBtn} id="successBTN" onClick={onCaptcha} >Verify Captcha</button>
        </div>
        {user.userCaptcha && <button className={s.form__button} type={type} > Continue </button>}
      </div>
    </div>
  );
}
export default Captcha;
