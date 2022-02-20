import { Link } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { saAlert } from "../../Helpers/sa2";

const Table = (props) => {
    const { children } = props;
    const tableRef = useRef();
    const copyToClipboard = () => {
        const elTable = tableRef.current;

        let range, sel;

        // Ensure that range and selection are supported by the browsers
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            // unselect any element in the page
            sel.removeAllRanges();

            try {
                range.selectNodeContents(elTable);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(elTable);
                sel.addRange(range);
            }

            document.execCommand("copy");
        }

        sel.removeAllRanges();

        saAlert(
            "success",
            "Berhasil copy tabel ke papan clip",
            "Data dapat dipaste ke excel maupun word !"
        );
    };

    return (
        <>
            <button
                className="mb-2 btn btn-info btn-sm"
                onClick={copyToClipboard}
                title="Copy data ke clipboard."
            >
                <i className="fa fa-copy"></i>
            </button>
            <div className="table-responsive mb-3">
                <table
                    className="table table-sm table-bordered table-striped"
                    ref={tableRef}
                >
                    {children}
                </table>
            </div>
        </>
    );
};

export const Thead = (props) => {
    const { children } = props;
    return (
        <thead className="text-white bg-primary text-center">{children}</thead>
    );
};

export const Tbody = (props) => {
    const { children } = props;
    return <tbody>{children}</tbody>;
};

export const Tbtn = (props) => {
    const { show = false, edit = false, del = false } = props;

    return (
        <>
            {show && (
                <Link
                    title="Show"
                    href={show}
                    className="fa fa-eye text-info mx-1"
                ></Link>
            )}

            {edit && (
                <Link
                    title="Edit"
                    href={edit}
                    className="fa fa-edit text-success mx-1"
                ></Link>
            )}

            {del && (
                <Link
                    style={{ padding: "0", border: "none", background: "none" }}
                    method="delete"
                    as="button"
                    type="button"
                    title="Delete"
                    href={del}
                    className="fa fa-trash-alt text-danger mx-1"
                ></Link>
            )}
        </>
    );
};

export default Table;
