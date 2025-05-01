import { FaGithub } from "react-icons/fa";
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
            <div className="github-icon">
                <a href="https://github.com/Alokzh/CF-Website">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;