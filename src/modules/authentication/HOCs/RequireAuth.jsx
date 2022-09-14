import { useAuth } from "@/hooks/useAuth";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export const RequireAuth = () => {
  const { auth } = useAuth();

  return !auth.accesToken ? <Outlet /> : <Login />;
};
