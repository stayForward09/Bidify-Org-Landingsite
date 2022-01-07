import Navbar from "./patterns/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Footer from "./patterns/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <LandingPage />
      <Footer />
    </Router>
  );
}

export default App;
