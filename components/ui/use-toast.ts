import { useToast } from "@/hooks/use-toast";

export { useToast };

// Simple toast function that uses the useToast hook
export const toast = (message: string) => {
  // This is a placeholder - in a real implementation, you'd access the toast context
  console.log('Toast:', message);
};
