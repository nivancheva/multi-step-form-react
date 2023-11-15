import './StepTitle.css';

export default function StepTitle({ title, definition }) {
    return (
        <div className="title">
            <h1>{title}</h1>
            <p className="title_definition">{definition}</p>
        </div>
    )
}