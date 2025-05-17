```jsx
  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

  function Navbar({ darkMode, setDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const token = localStorage.getItem('token');

    const handleLogout = () => {
      localStorage.removeItem('token');
      window.location.href = '/login';
    };

    return (
      <nav className="bg-gradient-to-r from-primary to-accent text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold font-poppins">EchoJar</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {token ? (
                <>
                  <Link to="/" className="px-3 py-2 rounded-md hover:bg-accent/70 transition">Home</Link>
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-accent/70 transition"
                    >
                      <span>Profile</span>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-lg py-2">
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-3 py-2 rounded-md hover:bg-accent/70 transition">Login</Link>
                  <Link to="/register" className="px-3 py-2 rounded-md hover:bg-accent/70 transition">Register</Link>
                </>
              )}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md hover:bg-accent/70 transition"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-accent/90 px-4 py-2">
            {token ? (
              <>
                <Link to="/" className="block py-2 hover:bg-accent/70 rounded-md">Home</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 hover:bg-accent/70 rounded-md">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 hover:bg-accent/70 rounded-md">Login</Link>
                <Link to="/register" className="block py-2 hover:bg-accent/70 rounded-md">Register</Link>
              </>
            )}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="block py-2 hover:bg-accent/70 rounded-md"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </nav>
    );
  }

  export default Navbar;
  ```
