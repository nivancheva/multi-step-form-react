import './AddOns.css';

export default function AddOns({ title, description, price, selected }) {
    return (
        <div className={`add-ons-wrapper${selected ? " selected" : ""}`}>
            <div className='flex add-ons'>
                <label className="add-ons-checkbox">
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                <div>
                    <p className="add-ons-title">{title}</p>
                    <p className="add-ons-description">{description}</p>
                </div>
            </div>
            <p className="add-ons-price">{price}</p>
        </div>
    )
}