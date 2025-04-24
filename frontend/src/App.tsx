import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth";
import { EmployeePage } from "./pages/Employee";
import { Login } from "./widgets/login/ui";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { auth } = useAuth();
  return auth.accessToken && auth.refreshToken ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
};

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            auth.accessToken && auth.refreshToken ? (
              <Navigate to="/employee" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            auth.accessToken && auth.refreshToken ? (
              <Navigate to="/employee" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/employee"
          element={
            <RequireAuth>
              <EmployeePage />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
