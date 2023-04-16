const MAX_SECONDS = 2001;

export function generateLoadingTime() {
  return Math.floor(Math.random() * MAX_SECONDS);
}
