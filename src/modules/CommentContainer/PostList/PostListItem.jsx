import { memo, useState } from "react";
import styles from "./post-list.module.css";
import InnerPost from "./InnerPost";
const BASE_URL = "http://localhost:3007"

const PostListItem = ({ _id, title, user, owner, createdAt, disLike, like, cover, removePost }) => {
    const [modalOpen, setModalOpen] = useState(false);

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
            <img src={`${BASE_URL}/${cover}`} alt="img" />
            <p>{createdAt}</p>
            <p>{disLike}</p>
            <p>{like}</p>
            <div>
                <button onClick={showModal}>Add comment</button>
                {modalOpen && (<div closeModal={closeModal}>
                    <InnerPost closeModal={closeModal} />
                </div>
                )}
            </div>

            <button onClick={() => removePost(_id)} type="button" className={styles.btn}>delete</button>
        </li>
    )
}

export default memo(PostListItem);

