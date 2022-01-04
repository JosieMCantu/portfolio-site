import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';
import ProjectContainer from '../containers/ProjectContainer';
import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectContainer />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;