import { useEffect } from "react";

function useSyncLogout() {
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "logout") {
        window.location.href = "/login";
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
}

export default useSyncLogout;
