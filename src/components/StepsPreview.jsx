import './StepsPreview.css';

const steps = [
    {
        value: 1,
        title: "Your info"
    },
    {
        value: 2,
        title: "SELECT PLAN"
    },
    {
        value: 3,
        title: "ADD-ONS"
    },
    {
        value: 4,
        title: "SUMMARY"
    }
];

export default function StepsPreview({ value, onValueChanged }) {
    return (
        <div className='bg-image'>

            {steps.map((step, idx) => {
                const isSelected = step.value === value;
                return (
                    <div key={idx} className='step-wrapper'
                        onClick={() => { onValueChanged(step.value) }}>
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