// React Library
import { Navigate, useLocation } from "react-router-dom";

// Supertoken
import { useSessionContext } from "supertokens-auth-react/recipe/session";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const session = useSessionContext();
  const location = useLocation();

  if (session.loading) {
    return <div>Loading...</div>;
  }

  return session.doesSessionExist ? (
    <>{children}</>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
