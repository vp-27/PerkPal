/** Shared deadlines keep color, wording, and urgency consistent across the wallet. */
export function expirationStatus(days: number) {
  if (days < 0)
    return {
      tone: "critical",
      label: "Expired",
      detail: "Expired",
      iconLabel: "Expired item",
    } as const;
  if (days === 0)
    return {
      tone: "critical",
      label: "Ends today",
      detail: "Ends today",
      iconLabel: "Action needed today",
    } as const;
  return {
    tone: days <= 7 ? "critical" : "warning",
    label: `${days} ${days === 1 ? "day" : "days"} left`,
    detail: days <= 7 ? "Use it this week" : "Plan ahead",
    iconLabel: days <= 7 ? "Expiring this week" : "Upcoming expiration",
  } as const;
}
