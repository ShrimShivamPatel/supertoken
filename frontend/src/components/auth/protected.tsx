// React Library
import { Navigate, useLocation } from "react-router-dom";

// Supertoken
import { useSessionContext } from "supertokens-auth-react/recipe/session";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {

  const session = useSessionContext();
  const location = useLocation();
  const state = location;

  if (session.loading) {
    return <div>Loading...</div>;
  }

  return session.doesSessionExist ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/signin" state={{ from: location.pathname }} replace={false} />

  );
};

export default ProtectedRoute;

// import { useState, useEffect, useLayoutEffect } from "react";
// import { Navigate } from "react-router-dom";
// import Session from "supertokens-web-js/recipe/session";
// export default function ProtectedRoute({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
//   console.log("I am protected route", isAuthenticated);
//   useEffect(() => {
//     async function checkAuth() {
//       const doesSessionExist = await Session.doesSessionExist();
//       setIsAuthenticated(doesSessionExist);
//     }
//     checkAuth();
//   }, []);

//   if (isAuthenticated === null) return <div>Loading...</div>;
//   return isAuthenticated ? children : <Navigate to="/auth/signin" replace />;
// }
