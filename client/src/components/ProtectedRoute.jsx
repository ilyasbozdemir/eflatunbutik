import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ user, isAdmin, children  }) => {
  if (!user && isAdmin === undefined) {
    return <Navigate to="/giris/" replace />;
  }
  if (!isAdmin && user === undefined) {
    return <Navigate to="/admin/giris/" replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
