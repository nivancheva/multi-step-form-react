import Inputs from "../components/Inputs";
import StepTitle from "./StepTitle";

export default function StepOneInputs() {
    return (
        <>
        <div className='steps-section'>
            <div>
                <StepTitle title='Pesonal Info' definition='Please provide your name, email address, and phone number.'/>

                <Inputs />
            </div>
          </div>

          <div className='button-section'>
            <div className='flex flex-space-between bg-white'>
              <button className="button btn-primery">Next Steps</button>
            </div>
          </div>
        </>
    )
}
    