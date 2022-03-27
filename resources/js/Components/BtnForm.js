import { Link } from "@inertiajs/inertia-react";
import React from "react";

const BtnForm = (props) => {
    const {
        submitTitle = "Submit",
        backTitle = "Kembali",
        backLink,
        processing = false,
    } = props;
    return (
        <div className="btn-group">
            <button
                type="submit"
                className="btn btn-success btn-sm"
                disabled={processing}
            >
                {submitTitle}
            </button>
            {backLink && (
                <Link href={backLink} className="btn btn-danger btn-sm">
                    {backTitle}
                </Link>
            )}
        </div>
    );
};

export default BtnForm;
