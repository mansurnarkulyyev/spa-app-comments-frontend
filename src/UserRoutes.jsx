import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoute from "./shared/components/PublicRoute/PublicRoute.jsx";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute.jsx";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="register" element={<SignUpPage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="about" element={<AboutPage />} />

        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
