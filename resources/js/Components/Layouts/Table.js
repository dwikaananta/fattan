import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useRef } from "react";
import { saConfirm } from "../../Helpers/sa2";

const Table = (props) => {
    const { children } = props;
    const tableRef = useRef();

    return (
        <>
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
                    onClick={() =>
                        saConfirm("warning", "Yakin Hapus Data ?").then(
                            (res) => {
                                if (res.isConfirmed) {
                                    Inertia.delete(del, {
                                        onSuccess: () => {
                                            Inertia.reload();
                                            handleClose();
                                        },
                                    });
                                }
                            }
                        )
                    }
                    className="fa fa-trash-alt text-danger mx-1"
                ></Link>
            )}
        </>
    );
};

export default Table;
