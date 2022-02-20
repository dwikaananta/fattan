import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const rootModal = document.getElementById("rootModal");

    const { modal, title, onClose, children } = props;

    return ReactDOM.createPortal(
        <div
            className={`modal fade ${modal ? "show d-block" : null}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ backgroundColor: "rgb(0 0 0 / 70%)" }}
        >
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header bg-primary">
                        <h5
                            className="modal-title text-white"
                            id="exampleModalLabel"
                            dangerouslySetInnerHTML={{ __html: title }}
                        ></h5>
                        <button
                            onClick={onClose}
                            type="button"
                            className="close bg-danger text-white"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>,
        rootModal
    );
};

export default Modal;
