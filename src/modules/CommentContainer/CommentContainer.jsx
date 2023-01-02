import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, fetchPosts, removePost } from '../../redux/post/post-operation';
import { getPosts } from '../../redux/post/post-selectors';
import Modal from '../../shared/Modal/Modal';
import FormCommentContainer from './FormCommentContainer/FormCommentContainer';
import PostList from './PostList';


function CommentContainer() {
    const [openModal, setOpenModal] = useState(false);

    const { items, loading, error } = useSelector(getPosts);

    console.log(items);

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

    const onAddPost = (data) => {
        dispatch(addPost(data));
        closeModal();
    }

    const onRemovePost = (_id) => {
        dispatch(removePost(_id));
    }


    return (
        <div>
            <button onClick={showModal}>Get Started</button>
            {openModal && (<Modal >
                <FormCommentContainer closeModal={closeModal} onSubmit={onAddPost} />
            </Modal>
            )}

            <PostList posts={items} removePost={onRemovePost} />
        </div>
    )
}

export default CommentContainer;



