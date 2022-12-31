import React from 'react'
import s from './rightbar.css'
import { Users } from "../../../data/dummyData"
import Online from '../Online/Online'

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className={s.birthdayContainer}>
                    <img className={s.birthdayImg} src="assets/gift.png" alt="" />
                    <span className={s.birthdayText}>
                        <b>Pola foster</b> and <b>3 others</b> have a birthday today.
                    </span>
                </div>
                <img className={s.rignhtbarAd} src="assets/ad.png" alt="" />
                <h4 className={s.rightbarTitle}>Online Friends</h4>
                <ul className={s.rightbarfriendList}>
                    {/* {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))} */}

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className={s.rightbarTitle}>User information</h4>
                <div className={s.rightbarInfo}>
                    <div className={s.rightbarInfoItem}>
                        <span className={s.rightbarInfoKey}>City:</span>
                        <span className={s.rightbarInfoValue}>New York</span>
                    </div>
                    <div className={s.rightbarInfoItem}>
                        <span className={s.rightbarInfoKey}>From:</span>
                        <span className={s.rightbarInfoValue}>Kerala</span>
                    </div>
                    <div className={s.rightbarInfoItem}>
                        <span className={s.rightbarInfoKey}>Relationship:</span>
                        <span className={s.rightbarInfoValue}>Single</span>
                    </div>
                </div>
                <h4 className={s.rightbarTitle}>User friends</h4>
                <div className={s.rightbarFollowings}>
                    < div className={s.rightbarFollowing} >
                        {/* <img src="assets/persons/5.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Emily Carter</span>
                    </ div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/6.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>John Carter</span>
                    </div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/7.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Sasha banks</span>
                    </div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/8.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Nicole Lucy</span>
                    </div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/9.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Laurel Porter</span>
                    </div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/5.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Charles Dickson</span>
                    </div>
                    <div className={s.rightbarFollowing}>
                        {/* <img src="assets/persons/6.jpg" alt="" className={s.rightbarFollowingImg} /> */}
                        <span className={s.rightbarFollowingname}>Johnathan Carter</span>
                    </div>
                </div >
            </>
        )
    }
    return (
        <div className={s.rightbar}>
            <div className={s.rightbarWrapper}>
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}