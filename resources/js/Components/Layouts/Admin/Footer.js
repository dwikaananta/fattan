import React from "react";

const Footer = (props) => {
    const { appName } = props;
    return (
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright © {appName} 2021</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
