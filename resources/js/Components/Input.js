import React from "react";

const Input = (props) => {
    const {
        label,
        type,
        customFront,
        name,
        value,
        placeholder,
        readOnly,
        onChange,
        error,
    } = props;

    return (
        <div className="form-group">
            {label && (
                <label
                    className="font-weight-bold text-primary"
                    dangerouslySetInnerHTML={{ __html: label }}
                ></label>
            )}
            {type === "date" || type === "datetime-local" || type === "time" ? (
                <div className={customFront && "d-flex"}>
                    {customFront && (
                        <span className="mr-1 mt-1">{customFront}</span>
                    )}
                    <input
                        className={`form-control form-control-sm border-primary ${
                            error && "is-invalid"
                        }`}
                        onChange={onChange}
                        type={type}
                        name={name}
                        defaultValue={value}
                        placeholder={placeholder}
                        readOnly={readOnly}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
            ) : (
                <div className={customFront && "d-flex"}>
                    {customFront && (
                        <span className="mr-1 mt-1">{customFront}</span>
                    )}
                    <input
                        className={`form-control form-control-sm border-primary ${
                            error && "is-invalid"
                        }`}
                        onKeyUp={onChange}
                        onChange={onChange}
                        type={type}
                        name={name}
                        defaultValue={value}
                        placeholder={placeholder}
                        readOnly={readOnly}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
            )}
        </div>
    );
};

export default Input;
