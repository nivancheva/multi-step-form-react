import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import PlanPeriod from './components/PlanPeriod';

function App() {
  const [checked, setChecked] = useState(false);

  function handleChecked(x) {
    setChecked(x);
  }

  return (
    <div>
      <PlanPeriod value={checked} onChange={handleChecked}/>
      <Buttons />
    </div>
  )
}

export default App
