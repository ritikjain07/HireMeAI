import { Link } from "react-router"
import { usePuterStore } from "~/lib/puter"
import { useNavigate } from "react-router"

const Navbar = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <div className="flex items-center">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient">HireMe AI</p>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 font-medium cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar