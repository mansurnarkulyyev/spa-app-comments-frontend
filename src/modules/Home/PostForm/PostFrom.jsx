import React from 'react'
import s from "./post-form.css"
// import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
    return (
        <div className={s.share}>
            <div className={s.shareWrapper}>
                <div className={s.shareTop}>
                    <img className={s.shareProfileImg} src="assets/persons/1.jpg" alt="" />
                    <input placeholder="What's in your mind?" className={s.shareInput} />
                </div>
                <hr className={s.shareHr} />
                <div className={s.shareBottom}>
                    <div className={s.shareOptions}>
                        <div className={s.shareOption}>
                            {/* <PermMedia htmlColor='tomato' className={s.shareIcon} /> */}
                            <span className={s.shareOptionText}>Photo or video</span>
                        </div>
                    </div>
                    <div className={s.shareOptions}>
                        <div className={s.shareOption}>
                            {/* <Label htmlColor='blue' className={s.shareIcon} /> */}
                            <span className={s.shareOptionText}>Tag</span>
                        </div>
                    </div>
                    <div className={s.shareOptions}>
                        <div className={s.shareOption}>
                            {/* <Room htmlColor='green' className={s.shareIcon} /> */}
                            <span className={s.shareOptionText}>Location</span>
                        </div>
                    </div >
                    <div className={s.shareOptions}>
                        <div className={s.shareOption}>
                            {/* <EmojiEmotions htmlColor='goldenrod' className={s.shareIcon} /> */}
                            <span className={s.shareOptionText}>Feelings</span>
                        </div>
                    </div>
                    <button className={s.shareButton}>Share</button>
                </div >
            </div >
        </div >
    )
}
