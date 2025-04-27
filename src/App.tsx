import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/resources" element={<div>Resources Page</div>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;