import Toggle from "./Toggle";
import './PlanPeriod.css'

export default function PlanPeriod({ value, onChange }) {
    return (
        <div className="container">
            <div className="plan-period-wrapper">
                <p>Monthly</p>
                <Toggle value={value} onChange={onChange}/>
                <p>Yearly</p>
            </div>
        </div>
    )
}