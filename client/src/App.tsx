import './lib/i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPersonalityETPage from './pages/about-personality-et';
import AboutPsychopathPage from './pages/about-psychopath';
import AboutIQPage from './pages/about-iq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/personality-et" element={<AboutPersonalityETPage />} />
        <Route path="/about/psychopath" element={<AboutPsychopathPage />} />
        <Route path="/about/iq" element={<AboutIQPage />} />
      </Routes>
    </Router>
  );
}

export default App;