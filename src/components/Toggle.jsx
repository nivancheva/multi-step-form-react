import './Toggle.css';

export default function Toggle({ value, onChange }) {
    return (
        <div>
            <label className="switch">
                <input 
                    type="checkbox"
                    checked={value}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}