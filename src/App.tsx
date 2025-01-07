import React, { useState } from "react";
import "./App.css";
import SectionWelcome from "./components/SectionWelcome";
import SectionExperience from "./components/SectionExperience";
import SectionProfessionalInfo from "./components/SectionProfessionalInfo";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<
    "welcome" | "experience" | "professionalInfo"
  >("welcome");

  const handleNext = () => {
    if (currentSection === "welcome") {
      setCurrentSection("experience");
    } else if (currentSection === "experience") {
      setCurrentSection("professionalInfo");
    }
  };

  const handleSubmit = (data: any) => {
    localStorage.setItem("professionalInfo", JSON.stringify(data));
    alert("Data saved to local storage!");
  };

  return (
    <div className="App">
      {currentSection === "welcome" && <SectionWelcome onNext={handleNext} />}
      {currentSection === "experience" && (
        <SectionExperience onNext={handleNext} />
      )}
      {currentSection === "professionalInfo" && (
        <SectionProfessionalInfo onSubmit={handleSubmit} onNext={function (data: any): void {
          throw new Error(data);
        } }  />
      )}
    </div>
  );
};

export default App;
