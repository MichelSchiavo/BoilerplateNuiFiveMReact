import { useEffect } from "react";
import { useOppenedNuiContext } from "contexts/OppenedNuiContext";

export function EventListener() {
  const { changeStatus } = useOppenedNuiContext();

  useEffect(() => {
    window.addEventListener("message", (e) => {
      changeStatus(e.data.value ?? false);
    });
  }, []);

  return null;
}
