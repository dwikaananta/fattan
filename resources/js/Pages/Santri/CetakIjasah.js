import React, { useState } from "react";
import { formatDate } from "../../Helpers/time";

const CetakIjasah = ({ santri }) => {
    const [print, setPrint] = useState(false);
    return (
        <>
            <div className="container text-center">
                <img src="/images/ijasah_header.jpg" alt="" />
                <h1>IJASAH</h1>
                <p>NOMOR : 03/MDNH/IV/{new Date().getFullYear()}</p>
                <h3>MADRASAH DINIYAH NURUL HUDA</h3>
                <h6>
                    DESA KINTAMANI KABUPATEN BANGLI BALI <br />
                    TAHUN AJARAN 1439-1440 H/ 2018-2022 M
                </h6>
                <p className="text-center">
                    Yang bertanda tangan dibawah ini Kepala Madrasah Diniyah
                    Nurul Huda Kintamani, menerangkan bahwa :
                </p>
                <h4>{santri.nama}</h4>
                <div className="px-5">
                    <div className="row text-left">
                        <div className="col-4">No. Induk</div>
                        <div className="col-8">{santri.nis}</div>
                        <div className="col-4">Tempat, Tanggal Lahir</div>
                        <div className="col-8">
                            {santri.tempat_lahir},{" "}
                            {formatDate(santri.tanggal_lahir)}
                        </div>
                        <div className="col-4">Nama Orang Tua</div>
                        <div className="col-8">{santri.nama_ortu}</div>
                    </div>
                </div>
                <h4>L U L U S</h4>
                <p className="text-justify">
                    Dalam ujian Madrasah Diniyah Nurul Huda Kintamani tingkat
                    Ula serta telah memenuhi semua kreteria kelulusan di
                    Madrasah Diniyah Nurul Huda Kintamani yang diselenggarakan
                    terhitung tanggal 1 s/d 5 Syaban 1440 H / 7 s/d 11 April
                    2022
                </p>
                <p className="text-justify mb-5">
                    Ijazah ini diberikan sebagai motivasi bagi yang bersangkutan
                    agar mengamalkan ilmunya dan bertaqwa kepada Allah SWT
                </p>
                <div className="row">
                    <div className="col-8 text-center d-flex justify-content-center align-items-center">
                        <span className="py-4 px-3 border">FOTO</span>
                    </div>
                    <div className="col-4">
                        Kintamani, 15 Sya’ban 1440 H/ 21 April 2022 H. <br />{" "}
                        Kepala Madrasah DiniyahNurul Huda
                        <br />
                        <br />
                        <br />
                        <b>
                            <u>Marjuni. S.Pd.I</u>
                        </b>
                    </div>
                </div>
                <div className={`btn-group ${print && "d-none"}`}>
                    <button
                        onClick={() => {
                            setPrint(true);
                            setTimeout(() => {
                                window.print();
                                setPrint(false);
                            }, 2000);
                        }}
                        className="btn btn-sm btn-success"
                        disabled={print}
                    >
                        Print
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-sm btn-danger"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </>
    );
};

export default CetakIjasah;
