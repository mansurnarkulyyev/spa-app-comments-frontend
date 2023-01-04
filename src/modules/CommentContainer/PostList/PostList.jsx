import PropTypes from 'prop-types'
import PostListItem from "./PostListItem";
import s from "./post-list.module.css";
// import InnerPostList from './InnerPost/InnerPostList';
// import { getPosts } from '../../../redux/post/post-selectors';
// import { useSelector } from 'react-redux';

const PostList = ({ posts, removePost }) => {
    // const { items, loading, error } = useSelector(getPosts);

    const elements = posts.map((item) => <PostListItem removePost={removePost} key={item._id} {...item} />);
    return (
        <ul className={s.wrap}>
            {elements}
            {/* <InnerPostList comments={items} /> */}
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


