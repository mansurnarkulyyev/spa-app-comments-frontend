import { memo } from "react";

import styles from "./post-list.module.css";

const PostListItem = ({ _id, title, user, owner, createdAt, disLike, like, cover, removePost }) => {
    return (
        <li
            className={styles.item}>{title}. Автор: {user}.
            <p>{owner.email}</p>
            {/* <img src={owner.avatarURL} alt=" avatarURL" /> */}
            <img src={cover} alt=" cover" />
            <p>{createdAt}</p>
            <p>{disLike}</p>
            <p>{like}</p>
            <button onClick={() => removePost(_id)} type="button" className={styles.btn}>Удалить</button>
        </li>
    )
}

export default memo(PostListItem);             