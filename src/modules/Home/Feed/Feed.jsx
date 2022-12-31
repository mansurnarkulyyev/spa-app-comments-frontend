import React from 'react'
import s from "./feed.css"
import PostFrom from '../PostForm/PostFrom'
import Post from '../Post/Post'
import { Posts } from "../../../data/dummyData"

export default function Feed() {
  return (
    <div className={s.feed}>
      <div className={s.feedWrapper}>
        <PostFrom />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  )
}
