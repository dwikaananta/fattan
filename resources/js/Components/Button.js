import { Link } from "@inertiajs/inertia-react";
import React from "react";

export const ButtonCreate = ({ title = "Tambah Data", link = "/" }) => {
    return (
        <Link
            href={link}
            className="d-sm-inline-block btn btn-primary shadow-sm"
        >
            <i className="fas fa-save fa-sm text-white-50 mr-2" />
            {title}
        </Link>
    );
};
