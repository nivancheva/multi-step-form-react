import './StepFourSummary.css';
import StepTitle from './StepTitle';

export default function StepFourSummary({ onForwardClick, onBackClick, onChangeClick, formData }) {
    function getTotalPrice() {
        let result = 0;

        if (formData.yearly) {
            result += formData.plan.valuePriceY;
        } else {
            result += formData.plan.valuePriceM;
        }

        formData.addOns.forEach(addOn => {
            result += addOn.valuePrice;
        });

        return `+$${result}/${formData.yearly ? "y" : "mo"}`;
    }
    return (
        <>
        <div className='steps-section'>
            <div>
                <StepTitle title='Finishing up' definition='Double-check everything looks OK before confirming.'/>
                <div className='summary-wrapper'>
                    <div className='summary'>
                        <div className='plan flex'>
                            <div>
                                <p>{formData.plan.title} ({formData.yearly ? "Yearly" : "Monthly"})</p>
                                <button onClick={onChangeClick} className='btn-change'>Change</button>
                            </div>
                            <p className='plan-price'>{formData.yearly ? formData.plan.yearlyPrice : formData.plan.price}</p>
                        </div>
                        <div className='summary-addon-wrapper'>
                            {formData.addOns.map((summaryAddOn, idx) => {
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
                        <p className='total-price'>{getTotalPrice()}</p>
                    </div>
                </div>
            </div>
          </div>

          <div className='button-section'>
            <div className='flex flex-space-between bg-white'>
              <button onClick={onBackClick} className="button btn-clear">Go Back</button>
              <button onClick={onForwardClick} className="btn-confirm">Confirm</button>
            </div>
          </div>
        </>
    )
}