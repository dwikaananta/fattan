import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import { titleState } from "../../Storages/page";

const Dashboard = (props) => {
    const {
        title,
        count_santri,
        count_santri_lk,
        count_santri_pr,
        count_guru,
    } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    return (
        <Main>
            <div className="d-flex justify-content-between mb-3">
                <div className="w-25 p-3 text-white text-center bg-primary">
                    <p className="m-0 p-0">Total Santri</p>
                    <h3 className="m-0 p-0">{count_santri}</h3>
                </div>
                <div className="w-25 p-3 text-white text-center bg-info">
                    <p className="m-0 p-0">Santri Laki-Laki</p>
                    <h3 className="m-0 p-0">{count_santri_lk}</h3>
                </div>
                <div className="w-25 p-3 text-white text-center bg-info2">
                    <p className="m-0 p-0">Santri Perempuan</p>
                    <h3 className="m-0 p-0">{count_santri_pr}</h3>
                </div>
                <div className="w-25 p-3 text-white text-center bg-success">
                    <p className="m-0 p-0">Total Guru</p>
                    <h3 className="m-0 p-0">{count_guru}</h3>
                </div>
            </div>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/images/1.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/2.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/3.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/4.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/5.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="/images/6.jpeg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev border-0"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="carousel-control-next border-0"
                    type="button"
                    data-target="#carouselExampleControls"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </Main>
    );
};

export default Dashboard;
