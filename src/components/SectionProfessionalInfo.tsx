import React, { useState } from "react";

interface SectionProfessionalInfoProps {
  onSubmit: (data: any) => void;
  onNext: (data: any) => void;
}

const SectionProfessionalInfo: React.FC<SectionProfessionalInfoProps> = ({
  onSubmit,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const handleSubmit = () => {
    if (name && email && company) {
      const data = { name, email, company };
      onSubmit(data);
      console.log(data);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <h1>Professional Information</h1>
      <p>Please provide your professional details.</p>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SectionProfessionalInfo;