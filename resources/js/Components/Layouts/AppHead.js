import React from "react";
import { Head } from "@inertiajs/inertia-react";

const AppHead = ({ title, children }) => {
    return (
        <Head>
            <title>{title ? title : ""}</title>
            {children}
        </Head>
    );
};

export default AppHead;
