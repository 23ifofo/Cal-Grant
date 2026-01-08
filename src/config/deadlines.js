// Centralized deadline utilities
// Provides a single source of truth for "next deadline" logic used across the app.
// getNextDeadline returns an ISO date string (YYYY-MM-DD) in UTC midnight for the next configured deadline.

function buildUTCDate(year, monthZeroBased, day) {
  // returns Date at UTC midnight for given year/month/day
  return new Date(Date.UTC(year, monthZeroBased, day, 0, 0, 0));
}

// Configure the recurring important deadlines (month is 0-based)
const IMPORTANT_DEADLINES = [
  { month: 2, day: 23 }, // March 23
  { month: 7, day: 27 }  // August 27
];

export function getNextDeadline() {
  const now = new Date();
  const year = now.getUTCFullYear();

  // build candidate deadlines for this year
  const candidates = IMPORTANT_DEADLINES.map(d => buildUTCDate(year, d.month, d.day));

  // find first candidate after now
  for (const c of candidates) {
    if (now < c) return c.toISOString().slice(0, 10); // YYYY-MM-DD
  }

  // none left this year -> return first deadline next year
  const nextYearFirst = buildUTCDate(year + 1, IMPORTANT_DEADLINES[0].month, IMPORTANT_DEADLINES[0].day);
  return nextYearFirst.toISOString().slice(0, 10);
}

// Convenience formatter for human-friendly display (local date string)
export function formatDeadlineISO(isoDateString) {
  try {
    const d = new Date(isoDateString);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch (err) {
    return isoDateString;
  }
}

export default {
  getNextDeadline,
  formatDeadlineISO
};
