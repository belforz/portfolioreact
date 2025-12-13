import { BrowserRouter as Router } from 'react-router-dom';
import { RouteRenderer } from './routers/RouteRenderer';
import routes from './routers';

export default function App() {
  return (
    <Router>
        <RouteRenderer routes={routes} />
    </Router>
  );
}