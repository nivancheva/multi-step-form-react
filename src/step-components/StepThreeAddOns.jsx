import { useContext, useState } from 'react';
import AddOns from '../components/AddOns';
import './StepThreeAddOns.css';
import StepTitle from './StepTitle';
import { formDataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const addOns = [
    {
        title:'Online service',
        description:"Access to multiplayer games",
        price: 1,
        yearlyPrice: 10
    },
    {
        title:'Larger storage',
        description:"Extra 1TB of cloud save",
        price: 2,
        yearlyPrice: 20
    },
    {
        title:'Customizable Profile',
        description:"Custom theme on your profile",
        price: 2,
        yearlyPrice: 20
    }
]

export default function StepThreeAddOns() {
    const {formData, setFormData} = useContext(formDataContext);
    const [selectedAddOns, setSelectedAddOns] = useState(formData.addOns || []);
    const navigate = useNavigate();

    function toggleAddOn(addOn) {
        if (selectedAddOns.indexOf(addOn) > -1) {
            setSelectedAddOns(selectedAddOns.filter(a => a !== addOn));
        } else {
            setSelectedAddOns([...selectedAddOns, addOn]);
        }
    }

    function handleBack() {
        navigate('/multi-step-form-react/plan');
    }

    function handleForward() {        
        setFormData(formData => { return {...formData, addOns: selectedAddOns }});
        
        navigate('/multi-step-form-react/summary');
    }

    return (
        <>
        <div className='steps-section'>
            <div>
                <StepTitle title='Pick add-ons' definition='Add-ons help enhance your gaming experience.'/>

                <div className='addOns-wrapper'>
                    {addOns.map((addOn,idx) => {
                        const isSelected = selectedAddOns.indexOf(addOn) > -1;
                        return (
                            <div key={idx}>
                                <AddOns
                                    {...addOn}
                                    onChange={() => toggleAddOn(addOn)}
                                    isYearly={formData.yearly}
                                    selected={isSelected}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className='button-section bg-white'>
            <div className='flex flex-space-between'>
                <button onClick={handleBack} className="button btn-clear">Go Back</button>
                <button onClick={handleForward} className="button btn-primary">Next Steps</button>
            </div>
        </div>
        </>
    )
}