import { Navigate } from "react-router-dom";
import { useAdmin } from "../hooks/useAdmin";

export default function AdminRoute({ children }) {
  const { isAdmin, loading } = useAdmin();

  if (loading) {
    return <p style={{ textAlign: "center" }}>Checking admin access...</p>;
  }

  // Not admin → redirect to ADMIN login
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}