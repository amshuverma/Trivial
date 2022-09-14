import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

export const PersistAuth = () => {
  const { auth, setAuth } = useAuth();
  const [loadingRefresh, setLoadingRefresh] = useState();
  const [loadingAccess, setLoadingAccess] = useState();

  useEffect(() => {
    let isMounted = true;

    if (!auth.accessToken) {
    }
  }, []);
  return <div>PersistAuth</div>;
};
