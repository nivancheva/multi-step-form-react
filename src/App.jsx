import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import PlanPeriod from './components/PlanPeriod';
import AddOns from './components/AddOns';
import ThankYouCard from './components/ThankYouCard';
import StepsPreview from './components/StepsPreview';
import StepOneInputs from './step-components/StepOneInputs';
import StepTwoSelectPlan from './step-components/StepTwoSelectPlan';

function App() {
  

  return (
    <div className='page-wrapper'>
      <div className='step-form'>

        <div className='steps-wrapper'>
          <StepsPreview />
        </div>

        <div className='main-wrapper'>
          <div className='steps-section'>

            {/* <StepOneInputs /> */}

            {/* <StepTwoSelectPlan /> */}

            {/* <ThankYouCard /> */}
          </div>

          <div className='button-section'>
            <Buttons />
          </div>
        </div>

      </div>
    </div>


    // <div>
    //   <div className='to-remove'>
    //     <StepsPreview />
    //   </div>

    //   <ThankYouCard />

    //   <AddOns title='Online Service' description='Access to multiplayer games' price='+$1/mo' selected={true}/>
    //   <AddOns title='Online Service' description='Access to multiplayer games' price='+$1/mo' selected={false}/>

    //   <PlanCard image ={iconArcade} title="Arcade" price="$90" discount="2 months free" selected={true} />

    //   <PlanPeriod value={checked} onChange={handleChecked}/>
    //   <Buttons />
    // </div>
  )
}

export default App
