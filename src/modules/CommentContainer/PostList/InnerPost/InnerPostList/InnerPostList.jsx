import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconBtn } from './IconBtn/IconBtn';
import { FaEdit, FaHeart, FaRegEye, FaReply, FaTrash } from "react-icons/fa";
import s from "./inner-post.module.css"
const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
});

// const BASE_URL = "http://localhost:3007";

function InnerPostList({ comments }) {
    const [areChildrenHidden, setAreChildrenHidden] = useState(false)

    const elements = comments.map((item) =>
        <li className={s.comment} key={item._id}>
            <div className={s.header}>
                <span className={s.name}>{item.owner.name}</span>
                <span className={s.date}>{dateFormatter.format(Date.parse(item.createdAt))}</span>
            </div>
            {/* <div className={s.message}>{item.comments.comment} */}
            {/* <p>{item.owner.name}</p> */}
            {/* < img src={`${BASE_URL}/${item.owner.avatarURL}`} alt="img" /> */}
            {/* </div> */}
            <div className={s.footer}>
                <IconBtn Icon={FaHeart} aria-label="Like">
                    3
                </IconBtn>
                <IconBtn Icon={FaReply} aria-label="Reply" />
                <IconBtn Icon={FaEdit} aria-label="Edit" />
                <IconBtn Icon={FaRegEye} aria-label="IoEyeSharp" />
                <IconBtn Icon={FaTrash} aria-label="Delete" color="danger" />
            </div>

            {/* {comments?.length > 0 && ( */}
            <>
                <div className={`nested-comments-stack ${areChildrenHidden ? s.hide : " "}`}>
                    <button className={s.collapseLine} aria-label="Hide Replies"
                        onClick={() => setAreChildrenHidden(true)}
                    />
                    <div className="nested-comments">
                        {/* <CommentList comments={childComments} /> */}
                    </div>
                </div>

                <button
                    className={`btn mt-1 ${!areChildrenHidden ? s.hide : ""}`}
                    onClick={() => setAreChildrenHidden(false)}>
                    Show Replies
                </button>
            </>
        </li>
    );
    return (
        <ul >
            {elements}
        </ul>
    )
}

export default InnerPostList


InnerPostList.defaultProps = {
    comments: []
}


InnerPostList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        lake: PropTypes.number.isRequired,
        disLake: PropTypes.number.isRequired,
    }))
}
