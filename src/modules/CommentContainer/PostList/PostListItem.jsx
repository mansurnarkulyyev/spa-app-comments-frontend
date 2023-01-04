import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../redux/post/post-selectors";

import styles from "./post-list.module.css";
import InnerPost from "./InnerPost";

const api_Url = "http://localhost:3007/api"

const PostListItem = ({ _id, title, user, owner, createdAt, disLike, like, cover, removePost }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const { items, loading, error } = useSelector(getPosts);
    // console.log(items);

    function showModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }
    return (
        <li
            className={styles.item}>{title} Author: {user}.
            <p>{owner.email}</p>
            {/* <img src={owner.avatarURL} alt=" avatarURL" /> */}
            <img src={`${api_Url}/${cover}`} alt="img" />
            <p>{createdAt}</p>
            <p>{disLike}</p>
            <p>{like}</p>
            <div>


                {loading && <p>...loading</p>}
                <button onClick={showModal}>Add comment</button>
                {modalOpen && (<div closeModal={closeModal}>
                    <InnerPost comments={items} closeModal={closeModal} />
                    {/* <FormCommentContainer closeModal={closeModal} onSubmit={onAddPost} /> */}
                </div>
                )}
                {error && error.message}

            </div>
            <button onClick={() => removePost(_id)} type="button" className={styles.btn}>delete</button>
        </li>
    )
}

export default memo(PostListItem);

