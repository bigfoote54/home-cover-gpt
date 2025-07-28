import { useState, useCallback } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);

  const addToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return {
    toasts,
    addToast,
  };
}
