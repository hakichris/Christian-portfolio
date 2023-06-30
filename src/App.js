import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import ProjectCards from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<ProjectCards />} />
      <Route path="/Contact" element={<Contact />} />
     </Routes>
     </BrowserRouter>
     
  );
}

export default App;
