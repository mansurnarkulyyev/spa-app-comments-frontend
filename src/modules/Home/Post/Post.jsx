import React, { useState } from 'react'
import s from "./post.css";
// import { MoreVert } from "@mui/icons-material";
import { Users } from "../../../data/dummyData";

export default function Post({ post }) {
  // const [like, setLike] = useState(post.like)
  // const [isliked, setIsLiked] = useState(false)

  // const likeHandler = () => {
  //   setLike(isliked ? like - 1 : like + 1)
  //   setIsLiked(!isliked)
  // }
  return (
    <div className={s.post}>
      <div className={s.postWrapper}>
        <div className={s.postTop}>
          <div className={s.postTopLeft}>
            <img className={s.postProfileImg}

              // src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="" />
            <span className={s.postUsername}>
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className={s.postDate}>{post.date}</span>
          </div>
          <div className={s.postTopRight}>
            {/* <MoreVert /> */}
          </div>
        </div>
        <div className={s.postCenter}>
          <span className={s.postText}>{post.desc}</span>
          <img className={s.postImg} src={post.photo} alt="" />
        </div>
        <div className={s.postBottom}>
          <div className={s.postBottomLeft}>
            {/* <img className={s.likeIcon} src="/assets/like.png" onClick={likeHandler} alt="" /> */}
            {/* <img className={s.likeIcon} src="/assets/heart.png" onClick={likeHandler} alt="" /> */}
            {/* <span className={s.postLikeCounter}>{like} people like it</span> */}
          </div>
          <div className={s.postBottomRight}>
            <span className={s.postCommenttext}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
