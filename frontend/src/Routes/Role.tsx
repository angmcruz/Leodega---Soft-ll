import { Navigate, Outlet } from "react-router-dom";

type Props = {
  allowed: Array<"admin" | "landlord">;
};

export default function Role({ allowed }: Props) {
  const token = localStorage.getItem("auth_token");
  const rawUser = localStorage.getItem("auth_user");

  if (!token || !rawUser) {
    return <Navigate to="/login" replace />;
  }

  let user: any;
  try {
    user = JSON.parse(rawUser);
  } catch {
    return <Navigate to="/login" replace />;
  }

  const role = user?.role;

  if (!allowed.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
