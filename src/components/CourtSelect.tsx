import React, { useState } from "react";

interface CourtSelectorProps {
  onCourtSubmit: (courts: number) => void;
}

const CourtSelector: React.FC<CourtSelectorProps> = ({ onCourtSubmit }) => {
  const [courts, setCourts] = useState(1);

  const handleSubmit = () => {
    onCourtSubmit(courts);
  };

  return (
    <div>
      <h2>Number of Courts</h2>
      <input
        type="number"
        min="1"
        max="5"
        value={courts}
        onChange={(e) => setCourts(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Submit Courts</button>
    </div>
  );
};

export default CourtSelector;
