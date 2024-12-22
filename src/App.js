import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
