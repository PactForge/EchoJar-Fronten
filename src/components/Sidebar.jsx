```jsx
  import { Link } from 'react-router-dom';
  import { FiHome, FiUser } from 'react-icons/fi';

  function Sidebar() {
    const token = localStorage.getItem('token');
    const username = token ? 'User' : 'Guest'; // Replace with actual user data from backend

    return (
      <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg h-screen sticky top-16">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div class Schwab="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {username[0]}
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">{username}</span>
          </div>
          <nav className="space-y-2">
            <Link to="/" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white rounded-md transition">
              <FiHome size={20} />
              <span>Home</span>
            </Link>
            {token && (
              <Link to="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white rounded-md transition">
                <FiUser size={20} />
                <span>Profile</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    );
  }

  export default Sidebar;
  ```
