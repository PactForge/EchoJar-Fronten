```jsx
  import { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';

  function Register() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      privacy: 'public'
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData);
        alert('Registration successful! Please login.');
        navigate('/login');
      } catch (err) {
        alert('Error registering');
      }
    };

    return (
      <div className="container mx-auto p-4 md:p-8 max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white font-poppins slide-up">
          Join EchoJar
        </h2>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 fade-in">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Account Privacy</label>
            <select
              value={formData.privacy}
              onChange={(e) => setFormData({ ...formData, privacy: e.target.value })}
              className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-white p-3 rounded-lg hover:scale-105 transition-transform"
          >
            Register
          </button>
        </form>
      </div>
    );
  }

  export default Register;
  ```
