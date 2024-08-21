import { match } from "assert";

export const generateMatches = (players: string[], type: "single" | "duo") => {
  // Placeholder logic for generating matches
  // For singles: every player plays against every other player
  // For doubles: create random teams and ensure all players meet.

  let matches: string[] = [];

  if (type == "single") {
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players.length; j++) {
        matches.push(`${players[i]} vs ${players[j]}`);
      }
    }
  } else if (type == "duo") {
    for (let i = 0; i < players.length; i += 2) {
      for (let j = i + 2; j < players.length; j += 2) {
        matches.push(
          `${players[i]} & ${players[i + 1]} vs ${players[j]} & ${players[j + 1]}`,
        );
      }
    }
  }

  return matches;
};
