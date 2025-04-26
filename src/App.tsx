import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/resources" element={<div>Resources Page</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
