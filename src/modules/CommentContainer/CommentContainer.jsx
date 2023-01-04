import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost } from '../../redux/post/post-operation';
import { getPosts } from '../../redux/post/post-selectors';
import Modal from '../../shared/Modal/Modal';
import FormCommentContainer from './FormCommentContainer/FormCommentContainer';
import PostList from './PostList';
import s from "../CommentContainer/FormCommentContainer/comment-container.module.scss"

function CommentContainer() {
    const [openModal, setOpenModal] = useState(false);

    const { items, loading, error } = useSelector(getPosts);

    const dispatch = useDispatch();

    function showModal() {
        setOpenModal(true);
    }
    function closeModal() {
        setOpenModal(false);
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const onRemovePost = (_id) => {
        dispatch(removePost(_id));
    }

    return (
        <div>
            {loading && <p>...loading</p>}
            <button className={s.modal__btn} onClick={showModal}>Get Started</button>
            {openModal && (<Modal closeModal={closeModal}>
                <FormCommentContainer closeModal={closeModal} />
            </Modal>
            )}

            {items.length ? <PostList posts={items} removePost={onRemovePost} />
                : <h1 style={{ textAlign: 'center' }}>Posts Not fount</h1>
            }

            {error && error.message}
        </div>
    )
}

export default CommentContainer;



