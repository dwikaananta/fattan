import { Inertia } from "@inertiajs/inertia";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import { ButtonCreate } from "../../Components/Button";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Modal from "../../Components/Layouts/Modal";
import Table, { Tbody, Thead } from "../../Components/Layouts/Table";
import Select from "../../Components/Select";
import { titleState } from "../../Storages/page";

const Show = (props) => {
    const { title, kelas, santri, mapel } = props;
    const { auth, flash } = usePage().props;

    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const [menus, setMenus] = useState(flash.menus ? flash.menus : "detail");

    const [processing, setProcessing] = useState(false);

    const handleSetSantri = (values) => {
        setProcessing(true);
        Inertia.post("/kelas-santri", values, {
            preserveScroll: true,
            onSuccess: () => {
                Inertia.reload();
                setProcessing(false);
            },
        });
    };

    return (
        <Main>
            <div className="btn-group w-100 mb-3">
                <button
                    onClick={() => setMenus("detail")}
                    className="col-4 w-100 btn btn-primary"
                >
                    <i className="fa fa-bars mr-2" />
                    Detail
                </button>
                {!auth.guru && (
                    <button
                        onClick={() => setMenus("santri")}
                        className="col-4 w-100 btn btn-success"
                    >
                        <i className="fa fa-users mr-2" />
                        Santri
                    </button>
                )}
                <button
                    onClick={() => setMenus("nilai")}
                    className="col-4 w-100 btn btn-info"
                >
                    <i className="fa fa-star mr-2" />
                    Nilai
                </button>
            </div>
            {menus === "detail" && (
                <Table>
                    <Thead>
                        <tr>
                            <th colSpan={2}>Data Kelas</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        <tr>
                            <td>Guru</td>
                            <td>{kelas.guru && kelas.guru.nama}</td>
                        </tr>
                        <tr>
                            <td>Kelas</td>
                            <td>{kelas.kelas}</td>
                        </tr>
                        <tr>
                            <td>Tahun Ajaran</td>
                            <td>{kelas.tahun_ajaran}</td>
                        </tr>
                    </Tbody>
                </Table>
            )}

            {menus === "santri" && (
                <>
                    <div className="row">
                        <div className="col-6">
                            <Table>
                                <Thead>
                                    <tr>
                                        <th colSpan={5}>Data Santri</th>
                                    </tr>
                                    <tr>
                                        <th>No</th>
                                        <th>NIS</th>
                                        <th>Nama</th>
                                        <th>
                                            <i className="fa fa-bars" />
                                        </th>
                                    </tr>
                                </Thead>
                                <Tbody>
                                    {santri.length > 0 &&
                                        santri.map((s, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {index + 1}
                                                    </td>
                                                    <td className="text-center">
                                                        {s.nis}
                                                    </td>
                                                    <td className="text-center">
                                                        {s.nama}
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-primary btn-sm"
                                                            onClick={() => {
                                                                handleSetSantri(
                                                                    {
                                                                        is_delete: false,
                                                                        kelas_id:
                                                                            kelas.id,
                                                                        santri_id:
                                                                            s.id,
                                                                    }
                                                                );
                                                            }}
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            Tambah
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </Tbody>
                            </Table>
                        </div>

                        <div className="col-6">
                            <Table>
                                <Thead>
                                    <tr>
                                        <th colSpan={5}>Data Kelas Santri</th>
                                    </tr>
                                    <tr>
                                        <th>No</th>
                                        <th>NIS</th>
                                        <th>Nama</th>
                                        <th>
                                            <i className="fa fa-bars" />
                                        </th>
                                    </tr>
                                </Thead>
                                <Tbody>
                                    {kelas.santri &&
                                        kelas.santri.length > 0 &&
                                        kelas.santri.map((s, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {index + 1}
                                                    </td>
                                                    <td className="text-center">
                                                        {s.nis}
                                                    </td>
                                                    <td className="text-center">
                                                        {s.nama}
                                                    </td>
                                                    <td className="text-center">
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => {
                                                                handleSetSantri(
                                                                    {
                                                                        is_delete: true,
                                                                        kelas_id:
                                                                            kelas.id,
                                                                        santri_id:
                                                                            s.id,
                                                                    }
                                                                );
                                                            }}
                                                            disabled={
                                                                processing
                                                            }
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </>
            )}

            {menus === "nilai" && (
                <Table>
                    <Thead>
                        <tr>
                            <th colSpan={5}>Data Kelas Santri</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>NIS</th>
                            <th>Nama</th>
                            <th>
                                <i className="fa fa-bars" />
                            </th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {kelas.santri &&
                            kelas.santri.length > 0 &&
                            kelas.santri.map((s, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-center">{s.nis}</td>
                                        <td className="text-center">
                                            {s.nama}
                                        </td>
                                        <td className="text-center">
                                            <CreateNilai
                                                kelas={kelas}
                                                kelas_id={kelas.id}
                                                santri={s}
                                                mapel={mapel}
                                                kelas_santri_id={
                                                    s.kelas_santri_id
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                    </Tbody>
                </Table>
            )}
        </Main>
    );
};

const CreateNilai = ({ kelas, kelas_id, santri, mapel, kelas_santri_id }) => {
    const [modal, setModal] = useState(false);
    const tagForm = useRef(false);

    const { data, setData, post, processing, errors } = useForm({
        kelas_id: kelas_id,
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

    const handleFinish = () => {
        tagForm.current && tagForm.current.reset();
        setData({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(`/nilai-santri/${kelas_santri_id}`, data, {
            onSuccess: () => {
                Inertia.reload();
                handleFinish();
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
                Nilai
            </button>
            <Modal
                modal={modal}
                title={`Nilai Santri Atas Nama ${santri.nama}`}
                onClose={handleClose}
            >
                <form onSubmit={handleSubmit} ref={tagForm} className="mb-3">
                    <div className="row">
                        <div className="col-6">
                            <Select
                                label="Mapel"
                                name="mapel_id"
                                onChange={handleChange}
                                error={errors.mapel_id}
                            >
                                <option value="">Pilih</option>
                                {mapel.length > 0 &&
                                    mapel.map((m, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <option value={m.id}>
                                                    {m.nama}
                                                </option>
                                            </React.Fragment>
                                        );
                                    })}
                            </Select>
                        </div>
                        <div className="col-6">
                            <Input
                                label="Nilai"
                                name="nilai"
                                onChange={handleChange}
                                error={errors.nilai}
                            />
                        </div>
                    </div>
                    <BtnForm submitTitle="Simpan" processing={processing} />
                </form>
                <Table>
                    <Thead>
                        <tr>
                            <th colSpan={3}>Data Nilai</th>
                        </tr>
                        <tr>
                            <th>No</th>
                            <th>Mapel</th>
                            <th>Nilai</th>
                        </tr>
                    </Thead>
                    <Tbody>
                        {kelas.kelas_santri
                            .filter(
                                (ks) =>
                                    parseInt(ks.santri_id) ===
                                        parseInt(santri.id) && ks.nilai
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
            </Modal>
        </>
    );
};

export default Show;
