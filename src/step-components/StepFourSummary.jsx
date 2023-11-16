import './StepFourSummary.css';
import StepTitle from './StepTitle';

const summary = {
    // personalInfo: {

    // },
    plan: 
    {
        // image: iconArcade,
        title:'Arcade',
        price:"$9/mo",
        yearlyPrice:"$90/y",
        discount:"2 months free"
    },
    addOns: [
        {
            title:'Online service',
            description:"Access to multiplayer games",
            price:"+$1/mo"
        },
        {
            title:'Larger storage',
            description:"Extra 1TB of cloud save",
            price:"+$2/mo"
        }
    ]
}

export default function StepFourSummary() {
    return (
        <div>
            <StepTitle title='Finishing up' definition='Double-check everything looks OK before confirming.'/>

            <div className='summary-wrapper'>
                <div className='summary'>
                    <div className='plan flex'>
                        <div>
                            <p>{summary.plan.title}</p>
                            <button className='btn-change'>Change</button>
                        </div>
                        <p className='plan-price'>{summary.plan.price}</p>
                    </div>
                    <div className='summary-addon-wrapper'>
                        {summary.addOns.map((summaryAddOn, idx) => {
                            return (
                                <div key={idx} className='flex summary-addon'>
                                    <p>{summaryAddOn.title}</p>
                                    <p className='addon-price'>{summaryAddOn.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='total flex'>
                    <p>Total (per month)</p>
                    <p className='total-price'>+$12/mo</p>
                </div>
            </div>
        </div>

    )
}