import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="logo">
        <p onClick={() => navigate("/")}>CF Website</p>
      </div>
      <div className="links">
        <p onClick={() => navigate("/resources")}>Resources</p>
      </div>
    </nav>
  );
};

export default Navbar;