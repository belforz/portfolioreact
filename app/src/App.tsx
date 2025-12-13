import { BrowserRouter as Router } from 'react-router-dom';
import { RouteRenderer } from './routers/RouteRenderer';
import routes from './routers';
import DarkModeProvider from './context/darkMode/DarkModeProvider';

export default function App() {
  const getHours = new Date().getHours();
  return (
    <Router>
      <DarkModeProvider initialMode={getHours >= 18 || getHours < 6 ? 'dark' : 'light'}>
        <RouteRenderer routes={routes} />
      </DarkModeProvider>
    </Router>
  );
}