import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = localStorage.getItem("auth_token");
  const user = localStorage.getItem("auth_user");
  console.log("Protected check:", {
  token: localStorage.getItem("auth_token"),
  user: localStorage.getItem("auth_user"),
  path: window.location.pathname,
});

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
