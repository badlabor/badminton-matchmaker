import React, { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import MatchTypeSelector from "./components/MatchTypeSelector";
import CourtSelector from "./components/CourtSelect";
import MatchSchedule from "./components/MatchSchedule";
import { generateMatches } from "./utils/matchGenerator";
import { scheduleMatches } from "./utils/courtScheduler";
import "./styles/App.css";

const App: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [matchType, setMatchType] = useState<"single" | "duo" | null>(null);
  const [courts, setCourts] = useState(1);
  const [schedule, setSchedule] = useState<string[]>([]);

  const handlePlayerSubmit = (players: string[]) => {
    setPlayers(players);
  };

  const handleMatchTypeSelect = (type: "single" | "duo") => {
    setMatchType(type);
  };

  const handleCourtSubmit = (courts: number) => {
    setCourts(courts);
    if (players.length && matchType) {
      const matches = generateMatches(players, matchType);
      const matchSchedule = scheduleMatches(matches, courts);
      setSchedule(matchSchedule);
    }
  };

  return (
    <div>
      <div>
        {!players.length && <PlayerInput onPlayerSubmit={handlePlayerSubmit} />}
      </div>
      {players.length > 0 && !matchType && (
        <MatchTypeSelector onMatchTypeSelect={handleMatchTypeSelect} />
      )}
      {players.length > 0 && matchType && !schedule.length && (
        <CourtSelector onCourtSubmit={handleCourtSubmit} />
      )}
      {schedule.length > 0 && <MatchSchedule schedule={schedule} />}
    </div>
  );
};

export default App;
