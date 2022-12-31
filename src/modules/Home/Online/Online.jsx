import React from 'react'
import s from "./online.css"

export default function Online({ user }) {
  return (
    <li className={s.rightbarFriend}>
      <div className={s.rightbarProfileImgContainer}>
        <img className={s.rightbarProfileImg} src={user.profilePicture} alt="" />
        <span className={s.rightbarOnline}></span>
      </div>
      <span className={s.rightbarUsername}>{user.username}</span>
    </li>
  )
}
