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
import CSSBattle from './components/CSSBattle';

function App() {
  return (
    <div>
      <Navbar />
      <main role="main">
        <Hero />
        <About />
        <Journey />
        <InteractiveLab />
        <Languages />
        <CSSBattle />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
