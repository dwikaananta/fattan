import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { saAlert } from "../../../Helpers/sa2";
import { titleState } from "../../../Storages/page";
import AppHead from "../AppHead";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export const ToggleContext = React.createContext();

const Main = (props) => {
    const [toggle, setToggle] = React.useState(false);
    const { titleAdd = "Tabah Data", linkAdd = false, children } = props;
    const { appName, flash } = usePage().props;
    const title = useRecoilValue(titleState);

    const handleAlert = useCallback(() => {
        if (flash.icon && flash.title) {
            saAlert(flash.icon, flash.title, flash.msg);
        }
    }, [flash.icon, flash.title]);

    useEffect(() => handleAlert(), [handleAlert]);

    return (
        <ToggleContext.Provider value={[toggle, setToggle]}>
            <AppHead title={`${appName} - ${title}`}></AppHead>
            <div id="wrapper">
                <Sidebar appName={appName} />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-primary font-weight-bold">
                                    {appName} - Sistem Pengelolaan Data Madrasah
                                </h1>
                                {linkAdd && (
                                    <Link
                                        href={linkAdd}
                                        className="d-sm-inline-block btn btn-primary shadow-sm"
                                    >
                                        <i className="fas fa-save fa-sm text-white-50 mr-2" />
                                        {titleAdd}
                                    </Link>
                                )}
                            </div>

                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">
                                        {title}
                                    </h6>
                                </div>
                                <div className="card-body">{children}</div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </ToggleContext.Provider>
    );
};

export default Main;
