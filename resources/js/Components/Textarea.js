import React from "react";

const Textarea = (props) => {
    const {
        label,
        type,
        name,
        value,
        placeholder,
        readOnly,
        row,
        onChange,
        error,
        notes,
    } = props;

    return (
        <div className="form-group">
            {label && (
                <label className="font-weight-bold text-primary">
                    {label}
                </label>
            )}
            <textarea
                className={`form-control form-control-sm border-primary ${
                    error && "is-invalid"
                }`}
                onKeyUp={onChange}
                type={type}
                name={name}
                defaultValue={value}
                placeholder={placeholder}
                readOnly={readOnly}
                rows={row ? row : 4}
            />
            {notes && (
                <span
                    className="text-danger"
                    dangerouslySetInnerHTML={{ __html: notes }}
                ></span>
            )}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default Textarea;
