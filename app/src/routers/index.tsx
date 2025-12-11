import { lazy } from "react";
import type {RouteConfig} from "./RouteRenderer";


const MainView = lazy(() => import("....")); 


const routes: RouteConfig[] = [
  { path: "/", element: <MainView /> },
];

export default routes;