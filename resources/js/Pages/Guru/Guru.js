import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import NoData from "../../Components/Layouts/NoData";
import Pagination from "../../Components/Layouts/Pagination";
import Table, { Tbody, Tbtn, Thead } from "../../Components/Layouts/Table";
import { titleState } from "../../Storages/page";

const Guru = (props) => {
    const { title, guru } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    return (
        <Main titleAdd="Tambah Data" linkAdd="/guru/create">
            {guru.data && guru.data.length > 0 ? (
                <>
                    <Table>
                        <Thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>NIP</th>
                                <th>Alamat</th>
                                <th>Jenis Kelamin</th>
                                <th>Telp</th>
                                <th>
                                    <i className="fa fa-bars" />
                                </th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {guru.data.map((g, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {index + guru.from}
                                        </td>
                                        <td>{g.nama}</td>
                                        <td className="text-center">{g.nip}</td>
                                        <td>{g.alamat}</td>
                                        <td className="text-center">
                                            {g.jenis_kelamin}
                                        </td>
                                        <td className="text-center">
                                            {g.telp}
                                        </td>
                                        <td className="text-center">
                                            <Tbtn
                                                edit={`/guru/${g.id}/edit`}
                                                del={`/guru/${g.id}`}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </Tbody>
                    </Table>

                    <Pagination
                        from={guru.from}
                        to={guru.to}
                        total={guru.total}
                        links={guru.links}
                    />
                </>
            ) : (
                <NoData />
            )}
        </Main>
    );
};

export default Guru;
