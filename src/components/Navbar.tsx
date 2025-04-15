
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-[#0EA5E9]">
              HeartSound AI
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#0EA5E9]">
              Home
            </Link>
            <Link to="/dataset" className="text-gray-700 hover:text-[#0EA5E9]">
              Dataset
            </Link>
            <Link to="/predict" className="text-gray-700 hover:text-[#0EA5E9]">
              Predict
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-[#0EA5E9]">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
