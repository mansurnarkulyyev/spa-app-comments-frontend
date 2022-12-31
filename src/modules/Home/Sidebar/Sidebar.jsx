import React from 'react'
import s from './sidebar.css'
// import {
//     RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark,
//     HelpOutline, WorkOutline, Event, School
// } from '@mui/icons-material'
import { Users } from "../../../data/dummyData"
import CloseFriend from '../CloseFriend/CloseFriend'

export default function Sidebar() {
    return (
        <div className={s.sidebar}>
            <div className={s.sidebarWrapper}>
                <ul className={s.sidebarList}>
                    <li className={s.sidebarListItem}>
                        {/* <RssFeed className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Feed</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <Chat className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Chats</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <PlayCircleFilledOutlined className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Videos</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <Group className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Groups</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <Bookmark className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Bookmarks</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <HelpOutline className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Questions</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <WorkOutline className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Jobs</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <Event className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Events</span>
                    </li>
                    <li className={s.sidebarListItem}>
                        {/* <School className={s.sidebarIcon} /> */}
                        <span className={s.sidebarListItemText}>Couseses</span>
                    </li>
                </ul>
                <button className={s.sidebarButton}>Show More</button>
                <hr className={s.sidebarHr} />
                <ul className={s.sidebarFriendList}>
                    {/* {Users.map(u => (
                        <CloseFriend key={u.id} user={u} />
                    ))} */}
                </ul>
            </div>
        </div>
    )
}

