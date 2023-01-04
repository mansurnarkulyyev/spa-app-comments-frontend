import React from "react";
import s from "./comment-container.module.scss";
import imageIcon from "../../Images/gallery.png";
// import emojiIcon from "../../Images/cat-face.png";
// import VideoIcon from "../../Images/video.png";

import FormInput from "../../../shared/components/FormInput/FormInput";
import { addPost } from "../../../redux/post/post-operation";
import { useDispatch } from "react-redux";

function FormCommentContainer({ closeModal }) {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        const result = Object.fromEntries(data.entries())
        dispatch(addPost(result));
        closeModal();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.modal}>
                <button
                    className={s.modal__closeButton}
                    type="button"
                    aria-label="кнопка закрытия"
                    data-modal-close
                    onClick={closeModal}>
                    x
                </button>
                <p className={s.modal__title}>Add posts</p>

                <label className={s.modal__label}>
                    Name
                    <FormInput type="text"
                        name="user"
                        required
                        placeholder=" " />
                </label>
                <label htmlFor="file2" className={s.modal__label + " " + s.modalTextarea}>
                    Post or comment
                    <div>
                        <label className={s.postImg} htmlFor="file">
                            <img src={`${imageIcon}`} className={s.icons} alt="" />
                            <input
                                accept="image/*,.png,.jpg,.gif,.web"
                                type="file"
                                multiple
                                name="cover"
                                id="file"
                                style={{ display: "none" }}
                            />{" "}
                        </label>
                    </div>
                    <label className={s.modal__label}>
                        <FormInput type="text"
                            name="text"
                            required
                            placeholder=" "
                        />
                    </label>
                </label>
                <button className={s.modal__btn} type="submit">
                    Continue
                </button>
            </form>
        </div>
    );
}

export default FormCommentContainer;
