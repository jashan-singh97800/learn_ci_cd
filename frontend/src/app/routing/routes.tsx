import { ReactNode } from "react";
import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { AdminPanel } from "../components/AdminPanel";
import { MenuManagement } from "../components/admin/MenuManagement";

export interface RouteConfig {
  path: string;
  component: ReactNode;
  isAdmin?: boolean;
  exact?: boolean;
}

// Wrapper components for route elements
const AdminPanelWrapper = () => {
  const navigate = useNavigate();
  return <AdminPanel onClose={() => navigate('/')} />;
};

const MenuManagementWrapper = () => {
  const navigate = useNavigate();
  return <MenuManagement onBack={() => navigate('/admin')} />;
};

// Route configurations
export const routes: RouteConfig[] = [
  {
    path: "/",
    component: <LandingPage />,
    exact: true,
  },
  {
    path: "/admin",
    component: <AdminPanelWrapper />,
    isAdmin: true,
  },
  {
    path: "/admin/menu",
    component: <MenuManagementWrapper />,
    isAdmin: true,
  },
];

// Create the router instance
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/admin",
    element: <AdminPanelWrapper />,
  },
  {
    path: "/admin/menu",
    element: <MenuManagementWrapper />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

// Helper function to get a route by path
export const getRoute = (path: string): RouteConfig | undefined => {
  return routes.find((route) => route.path === path);
};
