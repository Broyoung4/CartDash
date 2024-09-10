import React, { useState } from 'react';

interface StepperProps {
  steps: string[];
  activeStep: number;
  onStepChange: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep, onStepChange }) => {
  const [hoveredStep, setHoveredStep] = useState(-1);

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < activeStep) {
      onStepChange(stepIndex);
    }
  };

  const handleStepMouseEnter = (stepIndex: number) => {
    setHoveredStep(stepIndex);
  };

  const handleStepMouseLeave = () => {
    setHoveredStep(-1);
  };

  return (
    <div className="stepper">
      <ul className="stepper-list">
        {steps.map((step, stepIndex) => (
          <li
            key={stepIndex}
            className={`stepper-item ${
              stepIndex === activeStep
                ? 'active'
                : stepIndex === hoveredStep
                ? 'hover'
                : ''
            }`}
            onClick={() => handleStepClick(stepIndex)}
            onMouseEnter={() => handleStepMouseEnter(stepIndex)}
            onMouseLeave={handleStepMouseLeave}
          >
            <span className="stepper-number">{stepIndex + 1}</span>
            <span className="stepper-label">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;