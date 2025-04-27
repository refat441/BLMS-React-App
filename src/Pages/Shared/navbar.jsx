import { useAuth } from '../context/AuthContext';

const Navbar = ({ setIsSidebarOpen }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // safer logout
  };

  return (
    <div className="bg-white shadow">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:px-8">
        <button
          onClick={() => setIsSidebarOpen(prev => !prev)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">{user?.name}</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
