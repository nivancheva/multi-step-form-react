import Toggle from "./Toggle";
import './PlanPeriod.css'

export default function PlanPeriod({ value, onChange }) {
    return (
        <div className="container">
            <div className="plan-period-wrapper">
                <p className={!value ? 'cheked' : ''}>Monthly</p>
                <Toggle value={value} onChange={onChange}/>
                <p className={value ? 'cheked' : ''}>Yearly</p>
            </div>
        </div>
    )
}