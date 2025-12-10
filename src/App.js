import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Navbar from './components/NavBar';
import Projects from './components/Projects';
import Journey from './components/Journey';
import InteractiveLab from './components/InteractiveLab';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <InteractiveLab />
      <Languages />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
