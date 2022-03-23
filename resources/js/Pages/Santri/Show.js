import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import { ButtonCreate } from "../../Components/Button";
import Main from "../../Components/Layouts/Admin/Main";
import Table, { Tbody, Thead } from "../../Components/Layouts/Table";
import Select from "../../Components/Select";
import { formatDate } from "../../Helpers/time";
import { titleState } from "../../Storages/page";

const Show = (props) => {
    const { title, santri } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const [menus, setMenus] = useState("detail");

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
                    onClick={() => setMenus("pembayaran")}
                    className="col-4 w-100 btn btn-success"
                >
                    Pembayaran
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
                    {/* <div className="d-flex justify-content-end mb-2">
                        <ButtonCreate
                            link={`/pembayaran/create/${santri.id}`}
                            title="Tambah Pembayaran"
                        />
                    </div> */}
                    {santri && (
                        <h3>Pembayaran Santri Atas Nama {santri.nama}</h3>
                    )}
                    <form onSubmit={handleSubmit}>
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
                                <Input
                                    label="Kelas"
                                    name="kelas"
                                    onChange={(e) => handleChange(e)}
                                    error={errors.kelas}
                                />
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
                        <BtnForm
                            submitTitle="Tambah"
                            backTitle="Kembali"
                            backLink={`/santri/${santri.id}`}
                            processing={processing}
                        />
                    </form>
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
        </Main>
    );
};

export default Show;
