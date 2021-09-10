// Generates n size random alphanumeric char string
export function generateKey(n: number): string {
  const key = [...Array(n)].map(() => Math.floor(Math.random() * 16).toString(16)).join("")
  return key
}
