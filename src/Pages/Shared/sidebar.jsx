import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
        <span className="text-xl font-semibold text-white">BLMS</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 text-gray-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="mt-5 px-2">
        <Link
          to="/dashboard"
          className={`group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard' ? 'bg-gray-700' : ''}`}
        >
          <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </Link>

        {['admin', 'superadmin', 'leader', 'member'].includes(user?.type?.toLowerCase()) && (
          <Link
            to="/dashboard/tasks"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard/tasks' ? 'bg-gray-700' : ''}`}
          >
            <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Tasks
          </Link>
        )}

        <Link
          to="/dashboard/view-submissions"
          className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard/view-submissions' ? 'bg-gray-700' : ''}`}
        >
          <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Submissions
        </Link>

        {user?.type !== 'client' && (
          <Link
            to="/dashboard/submit-entry"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard/submit-entry' ? 'bg-gray-700' : ''}`}
          >
            <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Submit Entry
          </Link>
        )}

        {user?.type === 'superadmin' && (
          <>
            <Link
              to="/dashboard/users"
              className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard/users' ? 'bg-gray-700' : ''}`}
            >
              <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Users
            </Link>
            <Link
              to="/dashboard/register"
              className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:bg-gray-700 ${location.pathname === '/dashboard/register' ? 'bg-gray-700' : ''}`}
            >
              <svg className="mr-3 h-6 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Register New User
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
