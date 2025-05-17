```jsx
  import { useState } from 'react';
  import axios from 'axios';

  function PostForm({ onPostCreated }) {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!content.trim()) return;
      try {
        const token = localStorage.getItem('token');
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts`, { content }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setContent('');
        onPostCreated(res.data);
      } catch (err) {
        alert('Error creating post');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-2xl mx-auto mb-6 fade-in">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
          rows="4"
        />
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
        >
          Post
        </button>
      </form>
    );
  }

  export default PostForm;
  ```
