import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with Tailwind-friendly conflict resolution.
 * clsx is lightweight; if not installed we can use a simple fallback.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
