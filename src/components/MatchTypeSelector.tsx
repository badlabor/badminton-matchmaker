import React from "react";

interface MatchTypeSelectorProps {
  onMatchTypeSelect: (type: "single" | "duo") => void;
}

const MatchTypeSelector: React.FC<MatchTypeSelectorProps> = ({
  onMatchTypeSelect,
}) => {
  return (
    <div>
      <h2>Select Match Type</h2>
      <button onClick={() => onMatchTypeSelect("single")}>Single</button>
      <button onClick={() => onMatchTypeSelect("duo")}>Duo</button>
    </div>
  );
};

export default MatchTypeSelector;
