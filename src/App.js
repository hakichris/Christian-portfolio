import { HashRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Home';
import ProjectCards from './components/Projects';
import ContactForm from './components/Contact';
import Certification from './components/Certification';
import SharedLayout from './components/sharedlayout';
import Skill from './components/Skill';
import Recommendation from './components/Recommendations';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Profile />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="Project" element={<ProjectCards />} />
          <Route path="Skill" element={<Skill />} />
          <Route path="Recommendation" element={<Recommendation />} />
          <Route path="Contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
