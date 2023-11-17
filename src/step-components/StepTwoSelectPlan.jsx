import PlanCard from '../components/PlanCard';
import PlanPeriod from '../components/PlanPeriod';
import iconArcade from '../images/icon-arcade.svg';
import iconAdvanced from '../images/icon-advanced.svg';
import iconPro from '../images/icon-pro.svg';
import { useState } from 'react';
import './StepTwoSelectPlan.css'
import StepTitle from './StepTitle';

// price:"$9/mo",
const cards = [
    {
        image: iconArcade,
        title:'Arcade',
        price: 9,
        yearlyPrice: 90,
        discount:"2 months free"
    },
    {
        image:iconAdvanced,
        title:'Advanced',
        price: 12,
        yearlyPrice: 120,
        discount:"2 months free"
    },
    {
        image:iconPro,
        title:'Pro',
        price: 15,
        yearlyPrice: 150,
        discount:"2 months free"
    }
]

export default function StepTwoSelectPlan({ onForwardClick, onBackClick, formData }) {
    const [yearly, setYearly] = useState(formData.yearly);
    const [selectedCard, setSelectedCard] = useState(formData.plan || cards[0]);

    function onPlanPeriodChange(x) {
        setYearly(x);
    }

    function handleForward() {
        onForwardClick({
            plan: selectedCard,
            yearly: yearly
        });
    }

    return (
        <>
        <div className='steps-section'>
            <div>
                
                <StepTitle title='Select your plan' definition='You have the option of monthly or yearly billing.'/>

                <div className='card-wrapper'>
                    {cards.map((card,idx) => {
                        const isSelected = card === selectedCard;
                        return (
                            <div key={idx} onClick={() => setSelectedCard(card)}>
                                <PlanCard
                                    {...card}
                                    isYearly={yearly}
                                    selected={isSelected}/>
                            </div>
                        )
                    })}
                </div>

                <PlanPeriod value={yearly} onChange={onPlanPeriodChange}/>
                
            </div>
        </div>

        <div className='button-section'>
            <div className='flex flex-space-between bg-white'>
                <button onClick={onBackClick} className="button btn-clear">Go Back</button>
                <button onClick={handleForward} className="button btn-primery">Next Steps</button>
            </div>
        </div>
    </>
    )
}