import React from "react";

const Label = (props) => {
    const { label } = props;
    return (
        <label
            className="font-weight-bold text-secondary"
            dangerouslySetInnerHTML={{ __html: label }}
        ></label>
    );
};

export default Label;
