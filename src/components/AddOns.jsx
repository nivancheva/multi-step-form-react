import './AddOns.css';

export default function AddOns({ title, description, price, yearlyPrice, selected, onChange, isYearly }) {
    function formatPrice() {
        if (isYearly) {
            return `$${yearlyPrice}/yr`;
        } else {
            return `$${price}/mo`;
        }
    }

    return (
        <div className={`add-ons-wrapper${selected ? " selected" : ""}`}>
            <div className='flex add-ons'>
                <label className="add-ons-checkbox">
                    <input type="checkbox" checked={selected} onChange={onChange} />
                    <span className="checkmark"></span>
                </label>
                <div>
                    <p className="add-ons-title">{title}</p>
                    <p className="add-ons-description">{description}</p>
                </div>
            </div>
            <p className="add-ons-price">{formatPrice()}</p>
        </div>
    )
}