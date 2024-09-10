import React from 'react';

const Stepper = ({steps, activeStep, onStepChange}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        {steps.map((step, index) => {
          const isStepActive = index === activeStep;
          return (
            <div key={step.title}>
              <button
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isStepActive ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => onStepChange(index)}
              >
                {index + 1}
              </button>
              {index < steps.length - 1 && (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-300'></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;