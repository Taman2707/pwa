import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "../features/dashboard/components/aboutUs";
import EnglishHome from "../features/dashboard/components/englishHome";
import FrenchHome from "../features/dashboard/components/frenchHome";

const routes = [
  { path: "/", element: <Navigate to="/en/dashboard" replace /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/en/dashboard", element: <EnglishHome /> },
  { path: "/fr/dashboard", element: <FrenchHome /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
