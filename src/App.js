import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Home';
import ProjectCards from './components/Projects';
import ContactForm from './components/Contact';
import SharedLayout from './components/sharedlayout';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Profile />} />
          <Route path="About" element={<About />} />
          <Route path="Project" element={<ProjectCards />} />
          <Route path="Contact" element={<ContactForm />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
