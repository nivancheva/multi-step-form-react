import PlanCard from '../components/PlanCard';
import PlanPeriod from '../components/PlanPeriod';
import iconArcade from '../images/icon-arcade.svg';
import iconAdvanced from '../images/icon-advanced.svg';
import iconPro from '../images/icon-pro.svg';
import { useContext, useState } from 'react';
import './StepTwoSelectPlan.css'
import StepTitle from './StepTitle';
import { formDataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

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

export default function StepTwoSelectPlan() {
    const {formData, setFormData} = useContext(formDataContext);
    const [yearly, setYearly] = useState(formData.yearly);
    const [selectedCard, setSelectedCard] = useState(formData.plan || cards[0]);
    const navigate = useNavigate();

    function onPlanPeriodChange(x) {
        setYearly(x);
    }

    function handleBack() {
        navigate('/multi-step-form-react');
    }

    function handleForward() {        
        setFormData(formData => { return {...formData, plan: selectedCard, yearly: yearly}});
        
        navigate('/multi-step-form-react/addOns');
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

        <div className='button-section bg-white'>
            <div className='flex flex-space-between'>
                <button onClick={handleBack} className="button btn-clear">Go Back</button>
                <button onClick={handleForward} className="button btn-primary">Next Steps</button>
            </div>
        </div>
    </>
    )
}