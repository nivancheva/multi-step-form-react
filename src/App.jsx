import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import PlanPeriod from './components/PlanPeriod';
import PlanCard from './components/PlanCard';
import iconArcade from './images/icon-arcade.svg'

function App() {
  const [checked, setChecked] = useState(false);

  function handleChecked(x) {
    setChecked(x);
  }

  return (
    <div>
      <PlanCard image ={iconArcade} title="Arcade" price="$90" discount="2 months free" selected={true} />
      <PlanCard image ={iconArcade} title="Arcade" price="$90" discount="2 months free" selected={false} />
      <PlanPeriod value={checked} onChange={handleChecked}/>
      <Buttons />
    </div>
  )
}

export default App
