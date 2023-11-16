import { useState } from 'react';
import './App.css';
import ThankYouCard from './components/ThankYouCard';
import StepsPreview from './components/StepsPreview';
import StepOneInputs from './step-components/StepOneInputs';
import StepTwoSelectPlan from './step-components/StepTwoSelectPlan';
import StepThreeAddOns from './step-components/StepThreeAddOns';
import StepFourSummary from './step-components/StepFourSummary';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  function getStepContent() {
    switch (currentStep) {
      case 1:
        return <StepOneInputs />;
      case 2:
        return <StepTwoSelectPlan />;
      case 3:
        return <StepThreeAddOns />;
      case 4:
        return <StepFourSummary />;
      case 5:
        return <ThankYouCard />;
    }
  }

  function onStepsPreviewValueChanged(value) {
    setCurrentStep(value);
  }

  return (
    <div className='page-wrapper'>
      <div className='step-form'>

        <div className='steps-wrapper'>
          <StepsPreview value={currentStep} onValueChanged={onStepsPreviewValueChanged} />
        </div>

        <div className='main-wrapper'>
            { getStepContent() }
        </div>

      </div>
    </div>
  )
}

export default App
