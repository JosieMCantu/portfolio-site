import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import Footer from '../components/Footer';
import HomeContainer from '../containers/HomeContainer';
import ProjectContainer from '../containers/ProjectContainer';
import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import FooterMobile from '../components/FooterMobile';


function App() {
  const isMobileDevice = useMediaQuery({
    query: '(min-device-width: 648px)',
  });


  return (
    <div>
      <Router>
      {/* <Navbar /> */}
      {isMobileDevice ? <Navbar /> : <NavbarMobile />}
        <Routes>
          <Route path="/" element={<HomeContainer isMobile={isMobileDevice} />} />
          <Route path="/about" element={<About isMobile={isMobileDevice} />} />
          <Route path="/contact" element={<Contact isMobile={isMobileDevice} />} />
          <Route path="/projects" element={<ProjectContainer isMobile={isMobileDevice} />} />
        </Routes>
      {/* <Footer /> */}
      {isMobileDevice ? <Footer /> : <FooterMobile />}
      </Router>
    </div>
  );
}

export default App;