import React from 'react'
import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import s from "./formInput.module.scss";


function FormInput({ label, name, value, onChange, placeholder, required, type }) {
    const id = useMemo(() => nanoid(), []);
    return (
        <div className={s.form__input__group}>
            {label && (
                <label htmlFor={id}>{label}:</label>
            )}
            <input type={type} name={name} className={s.form__input} id={id} required={required} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default FormInput;

FormInput.defaultProps = {
    type: "text",
    required: false,
}