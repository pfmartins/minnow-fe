import React from 'react';
import './toggle.css';

const Toggle = ({ isChecked, onToggle }) => {
    return (
        <>
            <input
                checked={isChecked}
                onChange={(e) => onToggle(e.target.checked)}
                className="toggle-checkbox"
                id={`toggle-component`}
                data-testid="toggle-component"
                type="checkbox"
            />
            <label
                className={`toggle-label ${isChecked ? 'toggle-label--checked' : ''}`}
                data-testid="toggle-component-label"
                htmlFor={`toggle-component`}
            >
                <span className={`toggle-button`} />
            </label>
        </>
    );
};

export default Toggle;