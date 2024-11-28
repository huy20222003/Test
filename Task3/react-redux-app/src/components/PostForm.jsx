import { useState } from 'react';
import axios from 'axios';
import './PostForm.css'; 

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, body };
        try {
            const response = await axios.post(POSTS_URL, newPost);
            alert('Post added successful');
            console.log('Post added:', response.data);
        } catch (err) {
            console.error('Failed to add post:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Post</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;
