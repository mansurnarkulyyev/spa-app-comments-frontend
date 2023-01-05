import PropTypes from 'prop-types'
import PostListItem from "./PostListItem";
import s from "./post-list.module.css";

const PostList = ({ posts, removePost }) => {

    const elements = posts.map((item) => <PostListItem removePost={removePost} key={item._id} {...item} />);
    return (
        <ul className={s.wrap}>
            {elements}
        </ul>
    )
}

export default PostList;

PostList.defaultProps = {
    posts: []
}


PostList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        lake: PropTypes.number.isRequired,
        disLake: PropTypes.number.isRequired,
    }))
}


