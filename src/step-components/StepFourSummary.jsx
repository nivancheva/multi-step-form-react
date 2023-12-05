import { useContext } from 'react';
import './StepFourSummary.css';
import StepTitle from './StepTitle';
import { formDataContext } from '../context/formDataContext';

export default function StepFourSummary({ onForwardClick, onBackClick, onChangeClick }) {
    const {formData} = useContext(formDataContext);

    function getTotalPrice() {
        let result = 0;

        if (formData.yearly) {
            result += formData.plan.yearlyPrice;
        } else {
            result += formData.plan.price;
        }

        formData.addOns.forEach(addOn => {
            if (formData.yearly) {
                result += addOn.yearlyPrice;
            } else {
                result += addOn.price;
            }
        });

        return `+$${result}/${formData.yearly ? "yr" : "mo"}`;
    }

    function formatPrice(pricedObject) {
        if (formData.yearly) {
            return `$${pricedObject.yearlyPrice}/yr`;
        } else {
            return `$${pricedObject.price}/mo`;
        }
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
                            <p className='plan-price'>{formatPrice(formData.plan)}</p>
                        </div>
                        <div className='summary-addon-wrapper'>
                            {formData.addOns.map((summaryAddOn, idx) => {
                                return (
                                    <div key={idx} className='flex summary-addon'>
                                        <p>{summaryAddOn.title}</p>
                                        <p className='addon-price'>+{formatPrice(summaryAddOn)}</p>
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

          <div className='button-section bg-white'>
            <div className='flex flex-space-between'>
              <button onClick={onBackClick} className="button btn-clear">Go Back</button>
              <button onClick={onForwardClick} className="button btn-confirm">Confirm</button>
            </div>
          </div>
        </>
    )
}