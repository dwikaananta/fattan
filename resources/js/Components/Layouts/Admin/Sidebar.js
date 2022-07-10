import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { ToggleContext } from "./Main";

const Sidebar = (props) => {
    const { appName } = props;
    const { auth } = usePage().props;

    const [toggle, setToggle] = React.useContext(ToggleContext);

    return (
        <ul
            className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion${
                toggle ? " toggled" : ""
            }`}
            id="accordionSidebar"
        >
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="/dashboard"
            >
                <div className="sidebar-brand-icon bg-white rounded-pill">
                    {/* <i className="fas fa-laugh-wink" /> */}
                    <img src="/images/logo.png" className="w-50" alt="" />
                </div>
                <div className="sidebar-brand-text mx-3">
                    {appName}
                    {/* <sup>2</sup> */}
                </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <SinggleMenu
                title="Dashboard"
                link="/dashboard"
                fa="fa-tachometer-alt"
            />

            <hr className="sidebar-divider" />

            {auth.santri ? (
                <>
                    <SinggleMenu
                        title="Profil"
                        link={`/santri/${auth.santri.id}?section=detail`}
                        fa="fa-user"
                    />

                    <hr className="sidebar-divider" />

                    <SinggleMenu
                        title="Pembayaran"
                        link={`/santri/${auth.santri.id}?section=pembayaran`}
                        fa="fa-coins"
                    />

                    <hr className="sidebar-divider" />

                    <SinggleMenu
                        title="Nilai"
                        link={`/santri/${auth.santri.id}?section=nilai`}
                        fa="fa-star"
                    />

                    <hr className="sidebar-divider" />
                </>
            ) : (
                ""
            )}

            {auth.user ? (
                <>
                    <SinggleMenu title="Data Guru" link="/guru" fa="fa-users" />

                    <hr className="sidebar-divider" />
                </>
            ) : (
                ""
            )}

            {auth.user ? (
                <>
                    <SinggleMenu
                        title="Data Santri"
                        link="/santri"
                        fa="fa-users"
                    />

                    <hr className="sidebar-divider" />
                </>
            ) : (
                ""
            )}

            {auth.guru || auth.user ? (
                <>
                    <SinggleMenu
                        title="Data Kelas"
                        link="/kelas"
                        fa="fa-home"
                    />

                    <hr className="sidebar-divider" />
                </>
            ) : (
                ""
            )}

            {auth.user ? (
                <>
                    <SinggleMenu title="Data Pembelejaran" link="/pembelajaran" fa="fa-calendar-check" />

                    <hr className="sidebar-divider" />
                </>
            ) : (
                ""
            )}

            {/* <MultipleMenu /> */}

            {/* <hr className="sidebar-divider d-none d-md-block" /> */}

            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                    onClick={() => setToggle(!toggle)}
                />
            </div>
        </ul>
    );
};

const SinggleMenu = (props) => {
    const { title = "No Title", link = "", fa = "fa-cog" } = props;

    return (
        <li className="nav-item active">
            <Link className="nav-link" href={link}>
                <i className={`fas fa-fw ${fa}`} />
                <span>{title}</span>
            </Link>
        </li>
    );
};

const MultipleMenu = (props) => {
    // def data is title, link, custom
    const { title = "No Title", data = [] } = props;

    return (
        <>
            <div className="sidebar-heading">{title}</div>
            <li className="nav-item">
                <span
                    className="nav-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    <i className="fas fa-fw fa-cog" />
                    <span>{title}</span>
                </span>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        {data &&
                            data.length > 0 &&
                            data.map((i) => {
                                return (
                                    <>
                                        {i.custom ? (
                                            <h6 className="collapse-header">
                                                {i.custom}
                                            </h6>
                                        ) : (
                                            <Link
                                                className="collapse-item"
                                                href={i.link}
                                            >
                                                {i.title}
                                            </Link>
                                        )}
                                    </>
                                );
                            })}
                    </div>
                </div>
            </li>
        </>
    );
};

export default Sidebar;
