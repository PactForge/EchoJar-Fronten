```jsx
  import { useState, useEffect } from 'react';
  import axios from 'axios';
  import PostForm from '../components/PostForm';
  import { FiHeart, FiMessageSquare } from 'react-icons/fi';

  function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
          setPosts(res.data);
        } catch (err) {
          console.error('Error fetching posts:', err);
        }
      };
      fetchPosts();
    }, []);

    const handlePostCreated = (newPost) => {
      setPosts([newPost, ...posts]);
    };

    return (
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white font-poppins slide-up">
          Welcome to EchoJar
        </h1>
        {localStorage.getItem('token') && <PostForm onPostCreated={handlePostCreated} />}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 card-hover transition-all duration-300 fade-in"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {post.user.username[0]}
                </div>
                <span className="ml-3 font-semibold text-gray-900 dark:text-white">{post.user.username}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{post.content}</p>
              <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
                <button className="flex items-center space-x-1 hover:text-primary">
                  <FiHeart size={20} />
                  <span>0</span>
                </button>
                <Link to={`/posts/${post._id}`} className="flex items-center space-x-1 hover:text-primary">
                  <FiMessageSquare size={20} />
                  <span>{post.comments?.length || 0}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Home;
  ```
