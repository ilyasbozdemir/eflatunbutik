import { useLocation, Navigate, Outlet } from "react-router";

const RequireAuth = (props) => {
  const { allowedRoles, children } = props;

  const IS_USER_ANONYMOUS = "ANONYMOUS";
  const IS_USER_USER = "USER";
  const IS_USER_ADMIN = "ADMIN";

  //kişi  => üye mi değil mi
  //kişi üye ise =>   yetkili mi değil mi

  /*
  return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );*/
  /*
  return auth.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} />
  ) : (
    <Navigate to="/giris" state={{ from: location }} replace />
  );
  */

  // return <Outlet />;
  return { children };
};
export default RequireAuth;
