import React from 'react'
import s from "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className={s.sidebarFriend}>
      <img className={s.sidebarFriendImg} src={user.profilePicture} alt="" />
      <span className={s.sidearFriendName}>{user.username}</span>
    </li>
  )
}
