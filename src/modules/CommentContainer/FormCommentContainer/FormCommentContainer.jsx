import React from "react";
// import { Link } from "react-router-dom";
import s from "./comment-container.module.scss";
import imageIcon from "../../Images/gallery.png";
// import emojiIcon from "../../Images/cat-face.png";
// import FormInput from '../../../shared/components/FormInput/FormInput';
// import VideoIcon from "../../Images/video.png";
// import useForm from "../../../shared/hooks/useForm";
// import { initialState } from "./initialState";
// import { addPost } from "../../../redux/post/post-operation";
import { addPost } from "../../../shared/Api-services/posts";
import FormInput from "../../../shared/components/FormInput/FormInput";
// import profileimage from "../../Images/Profile.png"

function FormCommentContainer({ closeModal }) {
    // const { state, handleChange, handleSubmit } = useForm({
    // onSubmit,
    //     initialState,
    // });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        const result = Object.fromEntries(data.entries())
        await addPost(result)
        console.log("submit");
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
