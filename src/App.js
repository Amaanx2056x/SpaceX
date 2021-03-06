import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Capsule from "./components/Capsule/Capsule";
import Rocket from "./components/Rocket/Rocket";
import Footer from "./components/Layout/Footer";
import CapsuleDetails from "./components/Capsule/CapsuleDetails";
import RocketDetails from "./components/Rocket/RocketDetails";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Capsule />} />
          <Route exact path="/capsule/:id" element={<CapsuleDetails />} />
          <Route exact path="/rocket" element={<Rocket />} />
          <Route exact path="/rocket/:id" element={<RocketDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
