import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';

type Step = {
  id: string;
  title: string;
  completed?: boolean;
  icon?: React.ReactNode;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
  setCurrentStep?: (step: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  lineColor?: string;
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  setCurrentStep,
  activeColor = 'bg-blue-500',
  inactiveColor = 'bg-gray-200',
  lineColor = 'bg-gray-300',
}) => {
  return (
    <div className="w-full">
      {/* Desktop View (horizontal) */}
      <div className="hidden md:flex md:items-center md:justify-center w-full">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep || step.completed;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                {/* Step indicator */}
                <div
                  onClick={() => setCurrentStep && setCurrentStep(index)}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md
                    ${isCompleted ? activeColor : isActive ? activeColor : inactiveColor}
                    ${setCurrentStep ? 'cursor-pointer' : ''}
                    text-white font-medium relative z-10`}
                >
                  {isCompleted ? <BsCheck size={22} strokeWidth={1} /> : step.icon ? step.icon : index + 1}
                </div>
                
                {/* Step title */}
                <p className={`mt-2 text-xs text-center ${isActive ? 'font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </p>
              </div>

              {/* Connector line (except after last step) */}
              {!isLast && (
                <div className={`flex items-center mb-5 rounded-sm flex-1 h-1 ${isCompleted ? activeColor : lineColor}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile View (vertical) */}
      <div className="md:hidden space-y-4 pl-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep || step.completed;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="flex">
              {/* Vertical connector line (except for first step) */}
              <div className="flex flex-col items-center mr-3">
                {index > 0 && (
                  <div className={`w-0.5 h-6 ${isCompleted ? activeColor : lineColor}`} />
                )}
                
                {/* Step indicator */}
                <div
                  onClick={() => setCurrentStep && setCurrentStep(index)}
                  className={`flex items-center justify-center w-6 h-6 rounded-full 
                    ${isCompleted ? activeColor : isActive ? activeColor : inactiveColor}
                    ${setCurrentStep ? 'cursor-pointer' : ''}
                    text-white text-sm font-medium`}
                >
                  {isCompleted ? <BsCheck size={22} strokeWidth={1}/> : index + 1}
                </div>

                {/* Vertical connector line (except for last step) */}
                {!isLast && (
                  <div className={`w-0.5 flex-1 ${index < currentStep ? activeColor : lineColor}`} />
                )}
              </div>

              {/* Step content */}
              <div 
                onClick={() => setCurrentStep && setCurrentStep(index)}
                className={`pt-0.5 pb-4 ${setCurrentStep ? 'cursor-pointer' : ''}`}
              >
                <p className={`text-sm ${isActive ? 'font-medium' : 'text-gray-600'}`}>
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;