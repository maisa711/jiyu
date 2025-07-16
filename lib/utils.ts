import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  '#4A90E2', 
  '#48D1CC', 
  '#6AAA64', 
  '#E57373', 
  '#F7C56E', 
  '#F4A261',
  '#E76F51', 
  '#E5989B', 
  '#B565A7', 
  '#7371FC', 
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId:number): string {
  return COLORS[connectionId % COLORS.length]
}
