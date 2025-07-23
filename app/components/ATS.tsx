import React from 'react';

interface ATSProps {
  score: number;
  suggestions: {
    type: "good" | "improve";
    tip: string;
  }[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
  // Determine background gradient based on score
  let gradientClass = '';
  let iconPath = '';

  if (score > 69) {
    gradientClass = 'from-green-100';
    iconPath = '/icons/ats-good.svg';
  } else if (score > 49) {
    gradientClass = 'from-yellow-100';
    iconPath = '/icons/ats-warning.svg';
  } else {
    gradientClass = 'from-red-100';
    iconPath = '/icons/ats-bad.svg';
  }

  return (
    <div className={`bg-gradient-to-br ${gradientClass} to-white rounded-2xl shadow-md p-6 w-full`}>
      {/* Top section with icon and headline */}
      <div className="flex items-center gap-4 mb-4">
        <img src={iconPath} alt="ATS Score Icon" className="w-12 h-12" />
        <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
      </div>

      {/* Description section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Applicant Tracking System Compatibility</h3>
        <p className="text-gray-600 mb-4">
          This score indicates how well your resume will perform when processed by Applicant Tracking Systems (ATS) used by employers.
        </p>

        {/* Suggestions list */}
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-2">
              <img 
                src={suggestion.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"} 
                alt={suggestion.type === "good" ? "Check" : "Warning"} 
                className="w-5 h-5 mt-0.5" 
              />
              <p className="text-sm">{suggestion.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing line */}
      <p className="text-sm font-medium text-gray-700 italic">
        Improving your ATS compatibility can significantly increase your chances of getting an interview.
      </p>
    </div>
  );
};

export default ATS;
