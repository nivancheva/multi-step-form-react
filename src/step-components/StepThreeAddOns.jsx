import { useState } from 'react';
import AddOns from '../components/AddOns';
import './StepThreeAddOns.css';
import StepTitle from './StepTitle';

const addOns = [
    {
        title:'Online service',
        description:"Access to multiplayer games",
        price:"+$1/mo"
    },
    {
        title:'Larger storage',
        description:"Extra 1TB of cloud save",
        price:"+$2/mo"
    },
    {
        title:'Customizable Profile',
        description:"Custom theme on your profile",
        price:"+$2/mo"
    }
]

export default function StepThreeAddOns() {
    const [selectedAddOns, setSelectedAddOns] = useState();

    return (
        <div>
            <StepTitle title='Pick add-ons' definition='Add-ons help enhance your gaming experience.'/>

            <div className='addOns-wrapper'>
                {addOns.map((addOn,idx) => {
                    const isSelected = addOn === selectedAddOns;
                    return (
                        <div key={idx} onClick={() => setSelectedAddOns(addOn)}>
                            <AddOns
                                title={addOn.title}
                                description={addOn.description}
                                price={addOn.price}
                                selected={isSelected}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}