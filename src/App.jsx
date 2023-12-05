import { createContext, useState } from 'react';
import './App.css';
import ThankYouCard from './components/ThankYouCard';
import StepsPreview from './components/StepsPreview';
import StepOneInputs from './step-components/StepOneInputs';
import StepTwoSelectPlan from './step-components/StepTwoSelectPlan';
import StepThreeAddOns from './step-components/StepThreeAddOns';
import StepFourSummary from './step-components/StepFourSummary';
import { formDataContext } from './context/formDataContext';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  function getStepContent() {
    switch (currentStep) {
      case 1:
        return <StepOneInputs onForwardClick={onStepOneSubmit} />;
      case 2:
        return <StepTwoSelectPlan onBackClick={goBack} onForwardClick={onStepTwoSubmit} />;
      case 3:
        return <StepThreeAddOns onBackClick={goBack} onForwardClick={onStepThreeSubmit} />;
      case 4:
        return <StepFourSummary onBackClick={goBack} onForwardClick={goForward} onChangeClick={() => setCurrentStep(2)} />;
      case 5:
        return <ThankYouCard />;
    }
  }

  function onStepsPreviewValueChanged(value) {
    setCurrentStep(value);
  }

  function goBack() {
    setCurrentStep((value) => value - 1);
  }

  function goForward() {
    setCurrentStep((value) => value + 1);
  }

  function onStepOneSubmit(data) {
    setFormData(formData => { return {...formData, personalInfo: data}});
    goForward();
  }

  function onStepTwoSubmit(data) {
    setFormData(formData => { return {...formData, plan: data.plan, yearly: data.yearly}});
    goForward();
  }

  function onStepThreeSubmit(data) {
    setFormData(formData => { return {...formData, addOns: data }});
    goForward();
  }

  return (
    <div className='page-wrapper'>
      <div className='step-form'>

        <div className='steps-wrapper'>
          <StepsPreview value={currentStep} />
        </div>

        <div className='main-wrapper'>
            <formDataContext.Provider value={{formData}}>
              { getStepContent() }
            </formDataContext.Provider>          
        </div>

      </div>
    </div>
  )
}

export default App
