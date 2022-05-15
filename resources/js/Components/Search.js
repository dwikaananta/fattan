import React from "react";

export const FilterSearch = (props) => {
    const { label, placeholder, onChange } = props;

    let timer = 0;
    const handleChange = (val) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            onChange(val);
        }, 1000);
    };

    return (
        <div className="bg-light p-1 rounded">
            <label htmlFor="">{label ? label : "Search"}</label>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder ? placeholder : "Search . . ."}
                onKeyUp={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
