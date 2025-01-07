import React, { useState } from "react";

interface SectionExperienceProps {
  onNext: () => void;
}

const SectionExperience: React.FC<SectionExperienceProps> = ({ onNext }) => {
  const [experienceLevel, setExperienceLevel] = useState<string>("");

  const handleNext = () => {
    if (experienceLevel) {
      localStorage.setItem("experienceLevel", experienceLevel);
      onNext();
    } else {
      alert("Please select your experience level.");
    }
  };

  return (
    <div>
      <h1>Your Experience Level</h1>
      <p>How would you describe your experience with Autodesk products?</p>
      <select
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
      >
        <option value="">Select</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default SectionExperience;
