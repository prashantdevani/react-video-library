import { useEffect } from "react";

function useSyncLogin() {
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "login") {
        window.location.href = "/video-library";
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
}

export default useSyncLogin;
