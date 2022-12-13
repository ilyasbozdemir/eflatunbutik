import { Navigate,Outlet } from "react-router";

const ProtectedRoute = ({ user,isAdmin }) => {
  if (!user) {
    return <Navigate to="/giris/" replace />;
  }
  if (!isAdmin) {
    return <Navigate to="/admin/giris/" replace />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
