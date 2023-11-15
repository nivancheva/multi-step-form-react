import './PlanCard.css';

export default function PlanCard({ image, title, price, discount, selected, showDiscount }) {
    return (
        <div className={`plan-card${selected ? " selected" : ""}`}>
            <div><img className='plan-icon' src={image}/></div>
            <div>
                <p className='plan-title'>{title}</p>
                <p className='plan-price'>{price}</p>
                {showDiscount && <p className='plan-discount'>{discount}</p>}
            </div>
        </div>
    )
}