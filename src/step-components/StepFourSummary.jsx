import './StepFourSummary.css';
import StepTitle from './StepTitle';

const summary = {
    // personalInfo: {

    // },
    plan: 
    {
        title:'Arcade',
        price:"$9/mo",
        yearlyPrice:"$90/y",
    },
    addOns: [
        {
            title:'Online service',
            price:"+$1/mo"
        },
        {
            title:'Larger storage',
            price:"+$2/mo"
        }
    ]
}

export default function StepFourSummry() {
    return (
        <div>
            <StepTitle title='Finishing up' definition='Double-check everything looks OK before confirming.'/>
        </div>
    )
}