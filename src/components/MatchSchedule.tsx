import React from "react";

interface MatchScheduleProps {
  schedule: string[];
}

const MatchSchedule: React.FC<MatchScheduleProps> = ({ schedule }) => {
  return (
    <div>
      <h2>Match Schedule</h2>
      <ul>
        {schedule.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchSchedule;
