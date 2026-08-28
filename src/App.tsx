import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Settings from "./admin/pages/Settings";

import AdminLayout from "./admin/layouts/AdminLayout";
import { ProtectedRoute } from "./admin/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="products"
              element={<Products />}
            />

            <Route
              path="settings"
              element={<Settings />}
            />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;