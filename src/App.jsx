import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect default route to login page */}
        <Route path="/notev2" element={<Navigate to="/notev2/login" />} />
        <Route path="/notev2/login" element={<LoginPage />} />
        <Route path="/notev2/register" element={<RegisterPage />} />
        <Route path="/notev2/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
