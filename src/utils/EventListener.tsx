import { useEffect } from "react";
import { useNuiNuiContext } from "../context/NuiContext";

export function EventListener() {
  const { changeStatus } = useNuiNuiContext();

  useEffect(() => {
    window.addEventListener("message", (e) => {
      changeStatus(e.data.value ?? false);
    });
  }, []);

  return null;
}
