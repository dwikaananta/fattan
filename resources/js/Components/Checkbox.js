import React from "react";

const Checkbox = (props) => {
    const { inline, error, name, value, id, checked, onChange, label } = props;

    return (
        <>
            <div className={`form-check ${inline && "form-check-inline"}`}>
                <input
                    className={`form-check-input ${error && "is-invalid"}`}
                    name={name}
                    type="checkbox"
                    defaultValue={value}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                {label && (
                    <label
                        className="form-check-label font-weight-bold text-secondary"
                        htmlFor={id}
                    >
                        {label}
                    </label>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </>
    );
};

export default Checkbox;
