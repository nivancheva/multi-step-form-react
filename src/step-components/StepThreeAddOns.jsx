import { useState } from 'react';
import AddOns from '../components/AddOns';
import './StepThreeAddOns.css';
import StepTitle from './StepTitle';

const addOns = [
    {
        title:'Online service',
        description:"Access to multiplayer games",
        price:"+$1/mo",
        valuePrice: 1
    },
    {
        title:'Larger storage',
        description:"Extra 1TB of cloud save",
        price:"+$2/mo",
        valuePrice: 2
    },
    {
        title:'Customizable Profile',
        description:"Custom theme on your profile",
        price:"+$2/mo",
        valuePrice: 2
    }
]

export default function StepThreeAddOns() {
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    function toggleAddOn(addOn) {
        if (selectedAddOns.indexOf(addOn) > -1) {
            setSelectedAddOns(selectedAddOns.filter(a => a !== addOn));
        } else {
            setSelectedAddOns([...selectedAddOns, addOn]);
        }
    }

    return (
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
                                selected={isSelected}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}