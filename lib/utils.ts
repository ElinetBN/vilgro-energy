import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



function handleLinkedInError(error: any) {
  if (error.status === 429) {
    return { error: "API rate limit exceeded" };
  }
  if (error.status === 403) {
    return { error: "Insufficient API permissions" };
  }
  return { error: "Failed to load LinkedIn data" };
}