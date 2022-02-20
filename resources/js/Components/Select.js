import React from "react";

const Select = (props) => {
    const { label, error, name, value, onChange, disabled, children } = props;

    return (
        <div className="form-group">
            {label && (
                <label className="font-weight-bold text-primary">{label}</label>
            )}
            <select
                className={`custom-select custom-select-sm border-primary ${
                    error && "is-invalid"
                }`}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
            >
                {children}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Select;
