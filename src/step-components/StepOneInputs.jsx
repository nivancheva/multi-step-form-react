import Inputs from "../components/Inputs";
import StepTitle from "./StepTitle";

export default function StepOneInputs() {
    return (
        <div>
            <div className="step-one">
                <h1>Pesonal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <StepTitle title='Pesonal Info' definition='Please provide your name, email address, and phone number.'/>

            <Inputs />
        </div>
    )
}
    