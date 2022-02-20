import React from "react";

const Loading = (props) => {
    const { title } = props;

    return (
        <div className="d-flex justify-content-center align-items-center py-5 bg-light">
            <div className="spinner-border text-secondary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            {title ? <h3> &nbsp; {title}</h3> : <h3> &nbsp; Loading . . .</h3>}
        </div>
    );
};

export default Loading;
