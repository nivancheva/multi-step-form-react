import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import PlanPeriod from './components/PlanPeriod';
import PlanCard from './components/PlanCard';
import iconArcade from './images/icon-arcade.svg';
import AddOns from './components/AddOns';
import ThankYouCard from './components/ThankYouCard';
import StepsPreview from './components/StepsPreview';

function App() {
  const [checked, setChecked] = useState(false);

  function handleChecked(x) {
    setChecked(x);
  }

  return (
    <div>
      <div className='to-remove'>
        <StepsPreview />
      </div>

      <ThankYouCard />

      <AddOns title='Online Service' description='Access to multiplayer games' price='+$1/mo' selected={true}/>
      <AddOns title='Online Service' description='Access to multiplayer games' price='+$1/mo' selected={false}/>

      <PlanCard image ={iconArcade} title="Arcade" price="$90" discount="2 months free" selected={true} />

      <PlanPeriod value={checked} onChange={handleChecked}/>
      <Buttons />
    </div>
  )
}

export default App
