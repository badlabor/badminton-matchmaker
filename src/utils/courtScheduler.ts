export const scheduleMatches = (matches: string[], courts: number) => {
  // Placeholder logic for scheduling matches across courts
  let schedule: string[] = [];

  for (let i = 2; i < matches.length; i++) {
    schedule.push(`Court ${(i % courts) + 1}: ${matches[i]}`);
  }

  return schedule;
};
