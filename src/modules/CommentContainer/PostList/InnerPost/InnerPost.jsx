import React from 'react'
// import { getPosts } from '../../../../redux/post/post-selectors';
import FormInput from '../../../../shared/components/FormInput/FormInput'
import s from '../../PostList/post-list.module.css';
// import { initialState } from "./initialState";

function SinglePost({ closeModal }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        closeModal();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    Comment
                    <FormInput type="text"
                        name="comment"
                        required
                        placeholder=" " />
                </label>
                <button className={s.btn} type="submit">
                    Submit
                </button>
            </form>
        </>

    )
}

export default SinglePost