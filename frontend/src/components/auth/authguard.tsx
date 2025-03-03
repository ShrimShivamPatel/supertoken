// import { useEffect, useState } from "react";
// import Session from "supertokens-web-js/recipe/session";
// import { Navigate } from "react-router-dom";

// const AuthGuard = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

//   useEffect(() => {
//     const checkSession = async () => {
//       const sessionExists = await Session.doesSessionExist();
//       setIsAuthenticated(sessionExists);
//     };
//     checkSession();
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show a loading state while checking
//   }

//   return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
// };

// export default AuthGuard;

import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const session = useSessionContext();
  const location = useLocation();

  if (session.loading) {
    return <div>Loading...</div>;
  }

  return session.doesSessionExist ? (
    <Navigate to="/dashboard" state={{ from: location }} replace={false} />

  ) : (
    <>{children}</>
  );
};

export default AuthGuard;
