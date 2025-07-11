// utils.js
export function formatDate(date) {
  return date.toLocaleDateString("en-SO", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
