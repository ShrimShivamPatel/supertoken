// React Library
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Styling
import "./index.css";

// Components
import App from "./App";
import ProtectedRoute from "@/components/auth/protected";
import AuthGuard from "@/components/auth/authguard";
import Dashboard from "@/components/dashboard/dashboard";
import SignUp from "@/components/auth/signup";
import SignIn from "@/components/auth/signIn";

// Context
import { ThemeProvider } from "@/components/context/theme-provider";

// SuperTokens
import { SuperTokensWrapper } from "supertokens-auth-react";
import { initSuperToken } from "./lib/superTokensInit";

// Performance Monitoring
import reportWebVitals from "./reportWebVitals";

initSuperToken();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SuperTokensWrapper>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
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
        </ThemeProvider>
      </BrowserRouter>
    </SuperTokensWrapper>
  </React.StrictMode>
);

reportWebVitals();
