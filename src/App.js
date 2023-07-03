import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Home';
import ProjectCards from './components/Projects';
import Contact from './components/Contact';
import SharedLayout from './components/sharedlayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Profile />} />
          <Route path="Project" element={<ProjectCards />} />
          <Route path="Contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
