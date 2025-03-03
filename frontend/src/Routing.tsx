// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "@/components/auth/authguard";
// import SignUp from "@/components/auth/signup";
// import SignIn from "@/components/auth/signIn";
import ProtectedRoute from "@/components/auth/protected";
import Dashboard from "@/layout/private";
import { AuthForm } from "@/layout/auth";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import HomePage from "./layout/public";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      {/* <Route
        path="/dashboard"
        element={
          <SessionAuth>
            <Dashboard />
          </SessionAuth>
        }
      /> */}

      <Route
        path="/auth"
        element={
          <AuthGuard>
            <AuthForm />
          </AuthGuard>
        }
      >
        <Route index element={<Navigate to="signin" />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route />
      </Route>

      {/* <Route
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
      /> */}
    </Routes>
  );
};

export default Routing;
