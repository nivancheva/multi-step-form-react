import { createContext, useState } from 'react';
import './App.css';
import ThankYouCard from './components/ThankYouCard';
import StepsPreview from './components/StepsPreview';
import StepOneInputs from './step-components/StepOneInputs';
import StepTwoSelectPlan from './step-components/StepTwoSelectPlan';
import StepThreeAddOns from './step-components/StepThreeAddOns';
import StepFourSummary from './step-components/StepFourSummary';
import { FormData } from './context/Context';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className='page-wrapper'>
      <div className='step-form'>

        <div className='steps-wrapper'>
          <StepsPreview value={currentStep} />
        </div>

        <div className='main-wrapper'>
            <FormData>              
              <Routes>
                <Route path='/multi-step-form-react'>
                  <Route path='/multi-step-form-react' element={<StepOneInputs />}/>
                  <Route path='/multi-step-form-react/plan' element={<StepTwoSelectPlan />}/>
                  <Route path='/multi-step-form-react/addOns' element={<StepThreeAddOns />}/>
                  <Route path='/multi-step-form-react/summary' element={<StepFourSummary />}/>
                  <Route path='/multi-step-form-react/thankYou' element={<ThankYouCard />}/>
                </Route>
              </Routes>
            </FormData>
        </div>

      </div>
    </div>
  )
}

export default App
