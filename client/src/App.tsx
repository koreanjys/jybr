import { Router, Route } from 'wouter';
import HomePage from './pages/home';
import PersonalityTestPage from './pages/personality';
import HorrorTestPage from './pages/horror';
import IntelligenceTestPage from './pages/intelligence';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/personality" component={PersonalityTestPage} />
      <Route path="/horror" component={HorrorTestPage} />
      <Route path="/intelligence" component={IntelligenceTestPage} />
    </Router>
  );
}

export default App;