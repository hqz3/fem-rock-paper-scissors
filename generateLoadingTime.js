const MAX_SECONDS = 2001;

export function generateLoadingTime() {
  return Math.max(500, Math.floor(Math.random() * MAX_SECONDS));
}
