import { lazy } from "react";
import type {RouteConfig} from "./RouteRenderer";


const MainView = lazy(() => import("../views/MainView"));


const routes: RouteConfig[] = [
  { path: "/", element: <MainView /> },
];

export default routes;