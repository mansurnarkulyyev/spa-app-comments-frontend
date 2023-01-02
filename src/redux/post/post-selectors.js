export const getPosts = store => store.posts;
export const getFavoritePosts = ({posts}) => posts.items.filter(({favorite}) => favorite)