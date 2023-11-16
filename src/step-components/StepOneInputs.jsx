import Inputs from "../components/Inputs";
import StepTitle from "./StepTitle";

export default function StepOneInputs() {
    return (
        <div>
            <StepTitle title='Pesonal Info' definition='Please provide your name, email address, and phone number.'/>

            <Inputs />
        </div>
    )
}
    