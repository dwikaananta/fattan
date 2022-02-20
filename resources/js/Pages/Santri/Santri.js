import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import NoData from "../../Components/Layouts/NoData";
import Pagination from "../../Components/Layouts/Pagination";
import Table, { Tbody, Tbtn, Thead } from "../../Components/Layouts/Table";
import { titleState } from "../../Storages/page";

const Guru = (props) => {
    const { title, santri } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    return (
        <Main titleAdd="Tambah Data" linkAdd="/santri/create">
            {santri.data && santri.data.length > 0 ? (
                <>
                    <Table>
                        <Thead>
                            <tr>
                                <th>No</th>
                                <th>NIS</th>
                                <th>Nama</th>
                                <th>NIK</th>
                                <th>KK</th>
                                <th>Tanggal Lahir</th>
                                <th>Jenis Kelamin</th>
                                <th>Nama Ortu</th>
                                <th>Telp Ortu</th>
                                <th>Alamat</th>
                                <th>
                                    <i className="fa fa-bars" />
                                </th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {santri.data.map((s, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {index + santri.from}
                                        </td>
                                        <td className="text-center">{s.nis}</td>
                                        <td>{s.nama}</td>
                                        <td className="text-center">{s.nik}</td>
                                        <td className="text-center">{s.kk}</td>
                                        <td className="text-center">
                                            {s.tanggal_lahir}
                                        </td>
                                        <td className="text-center">
                                            {s.jenis_kelamin}
                                        </td>
                                        <td>{s.nama_ortu}</td>
                                        <td className="text-center">
                                            {s.telp_ortu}
                                        </td>
                                        <td>{s.alamat}</td>
                                        <td className="text-center">
                                            <Tbtn
                                                edit={`/santri/${s.id}/edit`}
                                                del={`/santri/${s.id}`}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </Tbody>
                    </Table>

                    <Pagination
                        from={santri.from}
                        to={santri.to}
                        total={santri.total}
                        links={santri.links}
                    />
                </>
            ) : (
                <NoData />
            )}
        </Main>
    );
};

export default Guru;
