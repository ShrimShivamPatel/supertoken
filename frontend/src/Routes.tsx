import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import AuthGuard from "./components/auth/authguard";
import SignUp from "./components/auth/signup";
import SignIn from "./components/auth/signIn";
import ProtectedRoute from "./components/auth/protected";
import Dashboard from "./components/dashboard/dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/signup"
        element={
          <AuthGuard>
            <SignUp />
          </AuthGuard>
        }
      />
      <Route
        path="/signin"
        element={
          <AuthGuard>
            <SignIn />
          </AuthGuard>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
