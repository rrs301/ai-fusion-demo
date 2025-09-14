import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

/**
 * Build a single className string from mixed inputs and resolve Tailwind utility conflicts.
 *
 * Accepts the same value types as `clsx` (strings, arrays, objects, etc.), coalesces them into
 * a space-separated class string, then runs `twMerge` to produce a final className with
 * conflicting Tailwind CSS utilities resolved.
 *
 * @param {...any} inputs - Class names or structures accepted by `clsx` (strings, arrays, objects, etc.).
 * @returns {string} The merged className string with Tailwind utility conflicts resolved.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
