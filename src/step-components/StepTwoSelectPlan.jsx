import PlanCard from '../components/PlanCard';
import PlanPeriod from '../components/PlanPeriod';
import iconArcade from '../images/icon-arcade.svg';
import iconAdvanced from '../images/icon-advanced.svg';
import iconPro from '../images/icon-pro.svg';
import { useState } from 'react';
import './StepTwoSelectPlan.css'
import StepTitle from './StepTitle';

const cards = [
    {
        image: iconArcade,
        title:'Arcade',
        price:"$9/mo",
        yearlyPrice:"$90/y",
        discount:"2 months free",
    },
    {
        image:iconAdvanced,
        title:'Advanced',
        price:"$12/mo",
        yearlyPrice:"$120/y",
        discount:"2 months free"
    },
    {
        image:iconPro,
        title:'Pro',
        price:"$15/mo",
        yearlyPrice:"$150/y",
        discount:"2 months free"
    }
]

export default function StepTwoSelectPlan() {
    const [checked, setChecked] = useState(false);
    const [selectedCard, setSelectedCard] = useState();

    function handleChecked(x) {
        setChecked(x);
    }

    return (
        <div>
            
            <StepTitle title='Select your plan' definition='You have the option of monthly or yearly billing.'/>

            <div className='card-wrapper'>
                {cards.map((card,idx) => {
                    const price = checked ? card.yearlyPrice : card.price;
                    const isSelected = card === selectedCard;
                    return (
                        <div key={idx} onClick={() => setSelectedCard(card)}>
                            <PlanCard
                                image={card.image}
                                title={card.title}
                                price={price}
                                discount={card.discount}
                                showDiscount={checked}
                                selected={isSelected}/>
                        </div>
                    )
                })}
            </div>

            <PlanPeriod value={checked} onChange={handleChecked}/>
            
        </div>
    )
}