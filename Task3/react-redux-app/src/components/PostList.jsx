import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items);
    const status = useSelector((state) => state.posts.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to fetch posts.</p>;

    const reversedPosts = [...posts].reverse();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {reversedPosts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
