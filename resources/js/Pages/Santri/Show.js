import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Modal from "../../Components/Layouts/Modal";
import Table, { Tbody, Thead } from "../../Components/Layouts/Table";
import Select from "../../Components/Select";
import { formatDate } from "../../Helpers/time";
import { titleState } from "../../Storages/page";

const Show = (props) => {
    const { title, santri, mapel, section } = props;
    const { auth, flash } = usePage().props;

    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const [menus, setMenus] = useState(
        flash.menus ? flash.menus : section ? section : "detail"
    );

    return (
        <Main>
            {!auth.santri && (
                <div className="btn-group w-100 mb-3">
                    <button
                        onClick={() => setMenus("detail")}
                        className="col-4 w-100 btn btn-primary"
                    >
                        <i className="fa fa-bars mr-2" />
                        Detail
                    </button>
                    <button
                        onClick={() => setMenus("pembayaran")}
                        className="col-4 w-100 btn btn-success"
                    >
                        <i className="fa fa-coins mr-2" />
                        Pembayaran
                    </button>
                    <button
                        onClick={() => setMenus("nilai")}
                        className="col-4 w-100 btn btn-info"
                    >
                        <i className="fa fa-star mr-2" />
                        Nilai
                    </button>
                </div>
            )}
            {menus === "detail" && (
                <Table>
                    <Thead>
                        <tr>
                            <th colSpan={2}>Data Santri</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <td>NIS</td>
                            <td>{santri.nis}</td>
                        </tr>
                        <tr>
                            <td>Nama</td>
                            <td>{santri.nama}</td>
                        </tr>
                        <tr>
                            <td>NIK</td>
                            <td>{santri.nik}</td>
                        </tr>
                        <tr>
                            <td>KK</td>
                            <td>{santri.kk}</td>
                        </tr>
                        <tr>
                            <td>Tempat Lahir</td>
                            <td>{santri.tempat_lahir}</td>
                        </tr>
                        <tr>
                            <td>Tanggal Lahir</td>
                            <td>{santri.tanggal_lahir}</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>{santri.jenis_kelamin}</td>
                        </tr>
                        <tr>
                            <td>Nama Ortu</td>
                            <td>{santri.nama_ortu}</td>
                        </tr>
                        <tr>
                            <td>Telp Ortu</td>
                            <td>{santri.telp_ortu}</td>
                        </tr>
                        <tr>
                            <td>Alamat</td>
                            <td>{santri.alamat}</td>
                        </tr>
                    </Tbody>
                </Table>
            )}

            {menus === "pembayaran" && (
                <>
                    {!auth.santri && (
                        <div className="d-flex justify-content-end mb-2">
                            {/* <ButtonCreate
                            link={`/pembayaran/create/${santri.id}`}
                            title="Tambah Pembayaran"
                        /> */}
                            <CreatePembayaran santri={santri} />
                        </div>
                    )}
                    {santri && (
                        <h3>Pembayaran Santri Atas Nama {santri.nama}</h3>
                    )}
                    <Table>
                        <Thead>
                            <tr>
                                <th colSpan={5}>Data Pembayaran</th>
                            </tr>
                            <tr>
                                <th>No</th>
                                <th>Nominal</th>
                                <th>Tanggal Transaksi</th>
                                <th>Kelas</th>
                                <th>Semester</th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {santri.pembayaran &&
                                santri.pembayaran.length > 0 &&
                                santri.pembayaran.map((p, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">
                                                {index + 1}
                                            </td>
                                            <td className="text-center">
                                                Rp. {p.nominal}
                                            </td>
                                            <td className="text-center">
                                                {formatDate(
                                                    p.tanggal_transaksi
                                                )}
                                            </td>
                                            <td className="text-center">
                                                {p.kelas}
                                            </td>
                                            <td className="text-center">
                                                {parseInt(p.semester) === 1 &&
                                                    "Ganjil"}
                                                {parseInt(p.semester) === 2 &&
                                                    "Genap"}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </Tbody>
                    </Table>
                </>
            )}

            {menus === "nilai" && (
                <>
                    <Nilai santri={santri} kelas={1} mapel={mapel} />
                    <Nilai santri={santri} kelas={2} mapel={mapel} />
                    <Nilai santri={santri} kelas={3} mapel={mapel} />
                    <Nilai santri={santri} kelas={4} mapel={mapel} />
                    <Nilai santri={santri} kelas={5} mapel={mapel} />
                    <Nilai santri={santri} kelas={6} mapel={mapel} />
                </>
            )}
        </Main>
    );
};
//
const Nilai = ({ santri, kelas, mapel }) => {
    return (
        <div className="mb-2">
            <h3 className="m-0 p-0">Nilai Kelas {kelas}</h3>
            <p className="m-0 p-0">
                Guru Pengajar ={" "}
                {santri.kelas_santri &&
                    santri.kelas_santri
                        .filter(
                            (ks) =>
                                ks.nilai &&
                                ks.kelas &&
                                parseInt(ks.kelas.kelas) === parseInt(kelas)
                        )
                        .map((ks) => ks.kelas.guru && ks.kelas.guru.nama)}
            </p>
            <p className="m-0 p-0">
                Tahun Ajaran ={" "}
                {santri.kelas_santri &&
                    santri.kelas_santri
                        .filter(
                            (ks) =>
                                ks.nilai &&
                                ks.kelas &&
                                parseInt(ks.kelas.kelas) === parseInt(kelas)
                        )
                        .map((ks) => ks.kelas.tahun_ajaran)}
            </p>
            <Table>
                <Thead>
                    <tr>
                        <th>No</th>
                        <th>Mapel</th>
                        <th>Nilai</th>
                    </tr>
                </Thead>
                <Tbody>
                    {santri.kelas_santri &&
                        santri.kelas_santri
                            .filter(
                                (ks) =>
                                    ks.nilai &&
                                    ks.kelas &&
                                    parseInt(ks.kelas.kelas) === parseInt(kelas)
                            )
                            .map((ks) => {
                                return ks.nilai.map((n, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">
                                                {index + 1}
                                            </td>
                                            <td>
                                                {mapel
                                                    .filter(
                                                        (m) =>
                                                            parseInt(m.id) ===
                                                            parseInt(n.mapel_id)
                                                    )
                                                    .map((m) => m.nama)}
                                            </td>
                                            <td className="text-center">
                                                {n.nilai}
                                            </td>
                                        </tr>
                                    );
                                });
                            })}
                </Tbody>
            </Table>
        </div>
    );
};

const CreatePembayaran = ({ santri, id }) => {
    const [modal, setModal] = useState(false);
    const tagForm = useRef(false);

    const { data, setData, post, processing, errors } = useForm({
        santri_id: santri.id,
    });

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleOpen = () => {
        setModal(true);
    };

    const handleClose = () => {
        tagForm.current && tagForm.current.reset();
        setModal(false);
        setData({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/pembayaran", data, {
            onSuccess: () => {
                Inertia.reload();
                handleClose();
            },
        });
    };

    return (
        <>
            <button
                className="d-sm-inline-block btn btn-primary shadow-sm"
                onClick={handleOpen}
            >
                <i className="fas fa-save fa-sm text-white-50 mr-2" />
                Tambah Pembayaran
            </button>
            <Modal
                modal={modal}
                title={`Pembayaran Santri Atas Nama ${santri.nama}`}
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit} ref={tagForm}>
                    <div className="row">
                        <div className="col-md">
                            <Input
                                label="Nominal"
                                name="nominal"
                                onChange={(e) => handleChange(e)}
                                error={errors.nominal}
                            />
                        </div>
                        <div className="col-md">
                            <Input
                                label="Tanggal Transaksi"
                                name="tanggal_transaksi"
                                type="date"
                                onChange={(e) => handleChange(e)}
                                error={errors.tanggal_transaksi}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <Select
                                label="Kelas"
                                name="kelas"
                                onChange={(e) => handleChange(e)}
                                error={errors.kelas}
                            >
                                <option value="">Pilih</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Select>
                        </div>
                        <div className="col-md">
                            <Select
                                label="Semester"
                                name="semester"
                                onChange={(e) => handleChange(e)}
                                error={errors.semester}
                            >
                                <option value="">Pilih</option>
                                <option value="1">Ganjil</option>
                                <option value="2">Genap</option>
                            </Select>
                        </div>
                    </div>
                    <BtnForm submitTitle="Tambah" processing={processing} />
                </form>
            </Modal>
        </>
    );
};

export default Show;
