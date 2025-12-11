import { Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";

export interface RouteConfig {
    path: string;
    element: ReactNode;
}

export interface RouteRendererProps {
    routes: RouteConfig[]
}

export function RouteRenderer({ routes} : RouteRendererProps) {
    return (
        <Routes>
            {routes.map(({ path, element }, idx) => (
                <Route key={idx} path={path} element={element} />
            ))}
        </Routes>
    )
}