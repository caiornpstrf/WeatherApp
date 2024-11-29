export function formatDate(baseDate: string): string {
  const date = new Date(baseDate);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function formatTime(baseDate: string): string {
  const date = new Date(baseDate);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
