import './PlanCard.css';

export default function PlanCard({ image, title, price, discount, selected }) {
    return (
        <div className={`plan-card${selected ? " selected" : ""}`}>
            <div><img className='plan-icon' src={image}/></div>
            <div>
                <p className='plan-title'>{title}</p>
                <p className='plan-price'>{price}</p>
                <p className='plan-discount'>{discount}</p>
            </div>
        </div>
    )
}