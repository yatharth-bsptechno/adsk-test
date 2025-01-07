import React from "react";

interface SectionWelcomeProps {
  onNext: () => void;
}

const SectionWelcome: React.FC<SectionWelcomeProps> = ({ onNext }) => {
  return (
    <div>
      <h1>Welcome to Autodesk</h1>
      <p>Let's get started with your onboarding process.</p>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default SectionWelcome;
