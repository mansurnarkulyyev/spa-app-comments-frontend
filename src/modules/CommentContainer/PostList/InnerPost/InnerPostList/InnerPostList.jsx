import React from 'react'
import PropTypes from 'prop-types'
const BASE_URL = "http://localhost:3007";

function InnerPostList({ comments }) {
    // console.log(comments);
    const elements = comments.map((item) => <li key={item._id}>
        {item.comments.comment}
        <p>{item.owner.name}</p>
        {/* <img src={owner.avatarURL} alt=" avatarURL" /> */}
        <img src={`${BASE_URL}/${item.owner.avatarURL}`} alt="img" />
    </li>
    );
    return (
        <ul >
            {elements}
        </ul>
    )
}

export default InnerPostList



InnerPostList.defaultProps = {
    comments: []
}


InnerPostList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        lake: PropTypes.number.isRequired,
        disLake: PropTypes.number.isRequired,
    }))
}
