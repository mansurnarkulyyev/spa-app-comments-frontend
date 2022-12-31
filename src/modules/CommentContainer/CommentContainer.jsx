import React from 'react'
import s from "./comment-container.module.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
// import VideoIcon from "../Images/video.png"
// import profileimage from "../Images/Profile.png"

function CommentContainer() {
    return (
        <div>
            <div className={s.ContentUploadContainer}>
                <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
                    {/* <img src='/' className={s.profileimage} alt="" /> */}
                    <input type="text" className={s.contentWritingpart} placeholder='Write your real thought.....' />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    {/* {imagePre !== null ? <img src={imagePre} style={{ width: "410px", height: '250px', objectFit: "cover", borderRadius: '10px' }} alt="" /> : VideoPre !== null ?  */}
                    {/* <video className={s.PostImages} width="500" height="500" controls >
                        {/* <source src='/' type="video/mp4" /> */}
                    {/* </video> : '' */}
                    {/* // } */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <label htmlFor='file'>
                                <img src={`${imageIcon}`} className={s.icons} alt="" />
                                <input type="file" name="file" id="file" style={{ display: "none" }} />
                            </label>
                            <img src={`${emojiIcon}`} className={s.icons} alt="" />
                            {/* <label htmlFor='file2'>
                                <img src={`${VideoIcon}`} className={s.icons} alt="" />
                                <input type="file" name="file2" id="file2" style={{ display: "none" }} />
                            </label> */}
                        </div>
                        <button cla style={{ height: "30px", marginRight: "12px", marginTop: "40px", paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom: 6, border: "none", backgroundColor: "#ff8000", color: "white", borderRadius: "5px", cursor: "pointer" }} >Post</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CommentContainer;

