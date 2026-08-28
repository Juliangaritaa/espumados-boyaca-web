import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export function ProtectedRoute() {

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    async function checkSession() {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      setAuthenticated(!!session);
      setLoading(false);

    }

    checkSession();

  }, []);

  if (loading) {

    return (
      <div className="flex min-h-screen items-center justify-center">
        Cargando...
      </div>
    );

  }

  if (!authenticated) {

    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );

  }

  return <Outlet />;
}