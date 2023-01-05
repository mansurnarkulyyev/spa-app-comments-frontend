import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { getPosts } from "../../../redux/post/post-selectors";
import styles from "./post-list.module.css";
import InnerPost from "./InnerPost";
import InnerPostList from "./InnerPost/InnerPostList/InnerPostList";

const BASE_URL = "http://localhost:3007"
const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
});

const PostListItem = ({ _id, text, user, owner, createdAt, disLike, like, cover, removePost }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { items, loading, error } = useSelector(getPosts);

    function showModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }
    return (
        <li
            className={styles.item}>
            <h1>Author: {user}.</h1>
            <img src={`${BASE_URL}/${cover}`} alt="img" />
            <div style={{ display: "flex", alignItems: "center", gap: 10, }}>
                <img style={{ width: 30, borderRadius: 50, marginTop: 15, marginBottom: 15 }} src={owner.avatarURL} alt=" avatarURL" />
                <b>{owner.name}</b>
                <span>{dateFormatter.format(Date.parse(createdAt))}</span>
            </div>
            <h3>{text}</h3>
            <p>{disLike}</p>
            <p>{like}</p>

            <section>
                {loading && <p>...loading</p>}
                <button onClick={showModal}>Add comment</button>
                {modalOpen && (<div closeModal={closeModal}>
                    <InnerPost closeModal={closeModal} />
                    <InnerPostList comments={items} />
                </div>
                )}
                {error && error.message}
            </section>
            <button onClick={() => removePost(_id)} type="button" className={styles.btn}>delete</button>
        </li>
    )
}

export default memo(PostListItem);





