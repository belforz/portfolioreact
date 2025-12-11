import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteRenderer } from './routers/RouteRenderer'; // Corrigido
import routes from './routers';

export default function App() {
  return (
    <Router>
      <RouteRenderer routes={routes} />
    </Router>
  );
}