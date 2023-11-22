import Header from './Components/Header';
import { HeroSection } from './Components/HeroSection';
import Projects from './Components/Projects';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Projects />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
