import './App.css';
import Card from './Card';
import Aboutme from './Aboutme';
import Header from './Header';
import Skills from './Skills';
import Footer from './Footer';
import Contact from './Contact';


function App() {
  return (
    <div className="min-h-screen py-10 px-5 bg-gradient-to-br from-purple-200 to-pink-200 via-cyan-200">
      <Header />
      <Card />
      <Aboutme />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
