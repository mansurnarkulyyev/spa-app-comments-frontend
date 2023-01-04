import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addInnerPost, fetchPosts } from '../../../../redux/post/post-operation';
// import { getPosts } from '../../../../redux/post/post-selectors';
import FormInput from '../../../../shared/components/FormInput/FormInput'
// import useForm from '../../../../shared/hooks/useForm';
// import { initialState } from "./initialState";


function SinglePost({ closeModal }) {

    // console.log(comments);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // await addPost(result)
        console.log("submit");
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
                <button type="submit">
                    Submit
                </button>
            </form>
        </>

    )
}

export default SinglePost