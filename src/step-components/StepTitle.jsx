import './StepTitle.css';

export default function StepTitle({ title, definition }) {
    return (
        <div className="step-title">
            <h1>{title}</h1>
            <p className="step-title_definition">{definition}</p>
        </div>
    )
}