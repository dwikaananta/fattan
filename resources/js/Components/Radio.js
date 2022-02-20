import React from "react";

const Radio = (props) => {
    const {
        inline = false,
        name,
        label = false,
        data = [],
        checked,
        onChange,
        error,
    } = props;

    return (
        <>
            {label && (
                <label
                    className="font-weight-bold text-secondary"
                    dangerouslySetInnerHTML={{ __html: label }}
                ></label>
            )}
            <div className="py-1">
                {data.length > 0 &&
                    data.map((d, index) => {
                        return (
                            <React.Fragment key={index}>
                                <RadioList
                                    inline={inline}
                                    label={d.label}
                                    name={name}
                                    id={d.id}
                                    value={d.value}
                                    checked={checked}
                                    onChange={onChange}
                                    error={error}
                                />
                            </React.Fragment>
                        );
                    })}
            </div>
            {error && (
                <div
                    style={{
                        width: "100%",
                        marginTop: "0.25rem",
                        fontSize: "80%",
                        color: "#e74a3b",
                    }}
                >
                    {error}
                </div>
            )}
        </>
    );
};

const RadioList = (props) => {
    const { inline, label, name, id, value, checked, onChange, error } = props;

    return (
        <div className={`form-check ${inline && "form-check-inline"}`}>
            <input
                className={`form-check-input ${error && "is-invalid"}`}
                name={name}
                type="radio"
                value={value}
                id={id}
                checked={String(checked) === String(value)}
                onChange={(e) => onChange(e)}
            />
            {label && (
                <label
                    className="form-check-label font-weight-bold text-secondary"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Radio;
