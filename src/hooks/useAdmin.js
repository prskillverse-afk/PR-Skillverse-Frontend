import { useEffect, useState } from "react";
import { auth } from "../firebase";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const token = await user.getIdTokenResult();
      setIsAdmin(!!token.claims.admin); // 🔥 ONLY THIS MATTERS
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { isAdmin, loading };
}
