// Application routes configuration
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
// import MainLayout from "../components/layout/MainLayout";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<Landing />} />

      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
