import './PlanCard.css';

export default function PlanCard({ image, title, price, yearlyPrice, discount, selected, isYearly }) {
    function formatPrice() {
        if (isYearly) {
            return `$${yearlyPrice}/yr`;
        } else {
            return `$${price}/mo`;
        }
    }
    
    return (
        <div className={`plan-card${selected ? " selected" : ""}`}>
            <div><img className='plan-icon' src={image}/></div>
            <div>
                <p className='plan-title'>{title}</p>
                <p className='plan-price'>{formatPrice()}</p>
                {isYearly && <p className='plan-discount'>{discount}</p>}
            </div>
        </div>
    )
}