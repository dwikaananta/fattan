import { Inertia } from "@inertiajs/inertia";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ButtonCreate } from "../../Components/Button";
import Main from "../../Components/Layouts/Admin/Main";
import Table, { Tbody, Thead } from "../../Components/Layouts/Table";
import { titleState } from "../../Storages/page";

const Show = (props) => {
    const { title, kelas, santri } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const [menus, setMenus] = useState("detail");

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
                    Detail
                </button>
                <button
                    onClick={() => setMenus("santri")}
                    className="col-4 w-100 btn btn-success"
                >
                    Santri
                </button>
                <button
                    onClick={() => setMenus("nilai")}
                    className="col-4 w-100 btn btn-info"
                >
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
                        <tr>
                            <td>Semester</td>
                            <td>{kelas.semester}</td>
                        </tr>
                    </Tbody>
                </Table>
            )}

            {menus === "santri" && (
                <>
                    <div className="d-flex justify-content-end mb-2">
                        <ButtonCreate
                            link={`/pembayaran/create/${santri.id}`}
                            title="Tambah Pembayaran"
                        />
                    </div>

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
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => {
                                                    handleSetSantri({
                                                        is_delete: true,
                                                        kelas_id: kelas.id,
                                                        santri_id: s.id,
                                                    });
                                                }}
                                                disabled={processing}
                                            >
                                                Hapus
                                            </button>
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

const setNilai = () => {
    return (
        <>
            <span>Cek Nilai</span>
        </>
    )
}

export default Show;
