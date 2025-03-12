import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Home';
import ProjectCards from './components/Projects';
import ContactForm from './components/Contact';
import Certification from './components/Certification';
import SharedLayout from './components/sharedlayout';
import Skill from './components/Skill';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Profile />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="Project" element={<ProjectCards />} />
          <Route path="Skill" element={<Skill />} />
          <Route path="Contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
