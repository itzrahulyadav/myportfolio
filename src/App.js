import './App.css';
import Header from './Header';
import CodingProfiles from './CodingProfiles';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Info from './Info';
import Projects from './Projects';

function App() {
  return (
    <div className="min-h-screen py-10 px-5 bg-gradient-to-br from-purple-200 to-pink-200 via-cyan-200">
      <Header />
      <Routes>
        <Route path = "/" element = {<Main />} />
        <Route path = "/CodingProfiles" element = {<CodingProfiles />} />
        <Route path = "/contact" element = {<Info />} />
        <Route path = "/projects" element = {<Projects />} />

      </Routes>
     
    </div>
  );
}

export default App;
