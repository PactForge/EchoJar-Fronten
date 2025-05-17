```jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import CommentForm from '../components/CommentForm';
import { FiHeart, FiMessageSquare } from 'react-icons/fi';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
        setPost(res.data);
        setComments(res.data.comments || []);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchPost();
  }, [id]);

  const handleCommentCreated = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!post) {
    return <div className="container mx-auto p-4 text-gray-900 dark:text-white">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-3xl">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-6 fade-in">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            {post.user.username[0]}
          </div>
          <span className="ml-3 font-semibold text-gray-900 dark:text-white">{post.user.username}</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">{post.content}</h2>
        <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
          <button className="flex items-center space-x-1 hover:text-primary">
            <FiHeart size={20} />
            <span>0</span>
          </button>
          <span className="flex items-center space-x-1">
            <FiMessageSquare size={20} />
            <span>{comments.length}</span>
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 font-poppins slide-up">Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 mb-4 fade-in">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {comment.user.username[0]}
              </div>
              <span className="ml-2 font-semibold text-gray-900 dark:text-white">{comment.user.username}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-200">{comment.content}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-400">No comments yet.</p>
      )}
      {localStorage.getItem('token') && (
        <CommentForm postId={id} onCommentCreated={handleCommentCreated} />
      )}
    </div>
  );
}

export default PostDetail;
```
