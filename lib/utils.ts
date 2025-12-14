// Utility function for combining class names (simplified for React Native)
// In React Native, we use StyleSheet, but this can be useful for conditional styling
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ');
}

