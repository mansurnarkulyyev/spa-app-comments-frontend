// import 'bootstrap/dist/css/bootstrap.min.css';
// import captchaImg from './captcha.jpg';
// import studentIMG from './2.png';
import React, { useState } from 'react';
function Captcha() {
  const [user, setUser] = useState({
      username:""
  });
  // const [submitting, setSubmitting] = useState(false);
  const characters ='abc123';
  function generateString(length) 
  {
      let result = '';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
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
  const onSubmit = e => {
    let element =  document.getElementById("succesBTN");
    let inputData = document.getElementById("inputType");
     element.style.cursor = "wait";
     element.innerHTML  = "Checking...";
     inputData.disabled = true;
     element.disabled = true;
      let myFunctions = function(){
          if(captcha === user.username)
          {
            element.style.backgroundColor   = "green";
            element.innerHTML  = "Captcha Verified";
            element.disabled = true;
            element.style.cursor = "not-allowed";
            inputData.style.display = "none";
          }
          else
          {
            element.style.backgroundColor   = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML  = "Not Matched";
            element.disabled = true;
            //  element.disabled = true;
            let myFunction = function(){
              element.style.backgroundColor   = "#007bff";
              element.style.cursor = "pointer";
              element.innerHTML  = "Verify Captcha";
              element.disabled = false;
              inputData.disabled = false;
              inputData.value ='sssss';
            };
            setTimeout(myFunction,5000);
          }
        }   
        setTimeout(myFunctions,5000); 
  };
  
   return (
    <div className="container">
      <h4 style={{}}><b> Please enter Captcha </b></h4>
      <div>
            <h4 id="captcha" style={{ width:"100px", textAlign:"center", padding:"20px", background:"lightgrey"}}>{captcha}</h4>
            <div >
              <input type="text" id="inputType" placeholder="Enter Captcha"
                name="username"  onChange={handleChange} autoComplete="off" style={{width:"20%"}}
                />
              <button type="button" id="succesBTN" onClick={onSubmit} >Verify Captcha</button>
           </div>
        </div>
      </div>
    );
}
export default Captcha;
