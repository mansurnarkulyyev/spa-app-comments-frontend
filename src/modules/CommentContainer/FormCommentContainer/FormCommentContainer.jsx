import React from "react";
import { Link } from "react-router-dom";
import s from "./comment-container.module.scss";
import imageIcon from "../../Images/gallery.png";
import emojiIcon from "../../Images/cat-face.png";
// import FormInput from '../../../shared/components/FormInput/FormInput';
import VideoIcon from "../../Images/video.png";
import useForm from "../../../shared/hooks/useForm";
import { initialState } from "./initialState";
// import profileimage from "../../Images/Profile.png"

function FormCommentContainer({ onSubmit, closeModal }) {
    const { state, handleChange, handleSubmit } = useForm({
        onSubmit,
        initialState,
    });

    const { title, name, link } = state;
    return (
        <div>
            <form onSubmit={handleSubmit} className={s.modal}>
                <button
                    className={s.modal__closeButton}
                    type="button"
                    aria-label="кнопка закрытия"
                    data-modal-close
                    onClick={closeModal}
                >
                    x
                </button>
                <p className={s.modal__title}>Add posts</p>
                <label className={s.modal__label}>
                    Name
                    <input
                        className={s.modal__input}
                        type="text"
                        name="name"
                        required
                        placeholder=" "
                        // onChange={handleChange}
                        value={name}
                    />
                </label>
                <label className={s.modal__label}>
                    you can add any link
                    <input
                        className={s.modal__input}
                        type="link"
                        name="link"
                        required
                        placeholder=" "
                    // value={link}
                    // onChange={handleChange}
                    />
                </label>

                <label
                    htmlFor="file2"
                    className={s.modal__label + " " + s.modalTextarea}
                >
                    Post or comment
                    <div>
                        <label className={s.postImg} htmlFor="file">
                            <img src={`${imageIcon}`} className={s.icons} alt="" />
                            <input
                                accept="image/*,.png,.jpg,.gif,.web"
                                type="file"
                                multiple
                                name="file"
                                id="file"
                                style={{ display: "none" }}
                            />{" "}
                        </label>
                        <label className={s.postImg2}>
                            <img src={`${VideoIcon}`} className={s.icons} alt="" />
                            <input
                                type="file"
                                name="video"
                                style={{ display: "none" }}
                            // value={video}
                            />
                        </label>
                        <label className={s.postImg3}>
                            <img src={`${emojiIcon}`} className={s.icons} alt="" />
                        </label>
                    </div>
                    <textarea
                        className={s.modal__textarea}
                        name="title"
                        rows="10"
                        placeholder="Введите текст"
                    ></textarea>
                </label>
                <label className={s.agreement + " " + s.agreementWrap}>
                    <input
                        className={s.agreement__input + " " + s.visuallyHidden}
                        type="checkbox"
                        name="agreement"
                    />
                    <span className={s.agreement__checkbox}>
                        <svg
                            width="16"
                            height="16"
                            // viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.49577 10.8565L3.95933 8.27555L3.88826 8.20323L3.81693 8.2753L2.92892 9.17254L2.85955 9.24263L2.92868 9.31297L6.42441 12.8701L6.49574 12.9427L6.56706 12.8701L14.0713 5.23403L14.1402 5.16393L14.0713 5.09384L13.1896 4.1966L13.1183 4.12406L13.047 4.19657L6.49577 10.8565Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="0.2"
                            />
                        </svg>
                    </span>
                    <span className={s.agreement__text}>
                        I agree with the newsletter and accept&nbsp;
                    </span>
                    <Link className={s.agreement__link} href="" target="_blank">
                        Terms of an agreement
                    </Link>
                </label>
                <button className={s.modal__btn} type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default FormCommentContainer;

// <div className={s.ContentUploadContainer}>
//     <FormInput multiple
//         accept='image/*,.png,.jpg,.gif,.web'
//         {...fields.name} />
//     <FormInput multiple
//         accept='image/*,.png,.jpg,.gif,.web'
//         {...fields.link} />
//     <FormInput multiple
//         accept='image/*,.png,.jpg,.gif,.web'
//         {...fields.title} />

//     <input
//         accept='image/*,.png,.jpg,.gif,.web'
//         type="file" multiple
//         name="file" id="file" style={{ display: "none" }} />

//  <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
// <img src='/' className={s.profileimage} alt="" /> */}
//  <input type="text" multiple
//                     accept='image/*,.png,.jpg,.gif,.web'
//                     className={s.contentWritingpart}
//                     placeholder='Write your real thought.....' />
//             </div>
//         //     <div style={{ marginLeft: '10px' }}>
//         {/* {imagePre !== null ? <img src={imagePre} style={{ width: "410px", height: '250px', objectFit: "cover", borderRadius: '10px' }} alt="" /> : VideoPre !== null ?  */}
//         {/* <video className={s.PostImages} width="500" height="500" controls >
//                 {/* <source src='/' type="video/mp4" /> */}
//         {/* </video> : '' */}
//         {/* // } */}
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <div>
//                 <label htmlFor='file'>
//                     <img src={`${imageIcon}`} className={s.icons} alt="" />
//                     <input
//                         accept='image/*,.png,.jpg,.gif,.web'
//                         type="file" multiple
//                         name="file" id="file" style={{ display: "none" }} />
//                 </label>
//                 <img src={`${emojiIcon}`} className={s.icons} alt="" />
//                 {/* <label htmlFor='file2'>
//                         <img src={`${VideoIcon}`} className={s.icons} alt="" />
//                         <input type="file" name="file2" id="file2" style={{ display: "none" }} />
//                     </label> */}
//             </div>
//             <button cla style={{ height: "30px", marginRight: "12px", marginTop: "40px", paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom: 6, border: "none", backgroundColor: "#ff8000", color: "white", borderRadius: "5px", cursor: "pointer" }} >Post</button>
//         </div>
//     </div>
// </div>
