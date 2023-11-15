import Inputs from "../components/Inputs";
import './StepOneInputs.css';

export default function StepOneInputs() {
    return (
        <div className="step-one-wrapper">
            <div className="step-one">
                <h1>Pesonal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <Inputs />
        </div>
    )
}
    