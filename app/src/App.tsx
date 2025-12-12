import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { RouteRenderer } from './routers/RouteRenderer';
import routes from './routers';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <RouteRenderer routes={routes} />
      </Suspense>
    </Router>
  );
}