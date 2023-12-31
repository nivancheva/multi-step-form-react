import './StepsPreview.css';

const steps = [
    {
        value: 1,
        title: "Your info"
    },
    {
        value: 2,
        title: "Select plan"
    },
    {
        value: 3,
        title: "Add-ons"
    },
    {
        value: 4,
        title: "Summary"
    }
];

export default function StepsPreview({ value }) {
    return (
        <div className='bg-image'>

            {steps.map((step, idx) => {
                const isSelected = step.value === value || step.value === 4 && value === 5;
                return (
                    <div key={idx} className='step-wrapper'>
                        <div>
                            <span className={`step ${isSelected ? "step-active" : ""}`}>{step.value}</span>
                        </div>
                        <div className='steps-info'>
                            <p className='step-num'>Step {step.value}</p>
                            <p className='step-title'>{step.title}</p>
                        </div>
                    </div>   
                );
            })}
        </div>
    )
}