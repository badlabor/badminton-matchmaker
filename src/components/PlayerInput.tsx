import React, { useState } from "react";

interface PlayerInputProps {
  onPlayerSubmit: (players: string[]) => void;
}

const PlayerInput: React.FC<PlayerInputProps> = ({ onPlayerSubmit }) => {
  const [players, setPlayers] = useState<string[]>([]);

  const handlePlayerChange = (index: number, value: string) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const handlePlayerCountChange = (count: number) => {
    setPlayers(Array(count).fill(""));
  };

  const handleSubmit = () => {
    onPlayerSubmit(players);
  };

  return (
    <div>
      <h2>Enter Player Names</h2>
      <input
        type="number"
        min="2"
        max="16"
        placeholder="Number of Players"
        onChange={(e) => handlePlayerCountChange(Number(e.target.value))}
      />
      {players.map((player, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Player ${index + 1}`}
          value={player}
          onChange={(e) => handlePlayerChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleSubmit}>Submit Players</button>
    </div>
  );
};

export default PlayerInput;
