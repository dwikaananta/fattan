import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import NoData from "../../Components/Layouts/NoData";
import Pagination from "../../Components/Layouts/Pagination";
import Table, { Tbody, Tbtn, Thead } from "../../Components/Layouts/Table";
import { titleState } from "../../Storages/page";

const Kelas = (props) => {
    const { title, kelas } = props;
    const { auth } = usePage().props;

    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const [page, setPage] = useState(1);

    return (
        <Main titleAdd="Tambah Data" linkAdd="/kelas/create">
            {kelas.data && kelas.data.length > 0 ? (
                <>
                    <Table>
                        <Thead>
                            <tr>
                                <th>No</th>
                                <th>Guru</th>
                                <th>Kelas</th>
                                <th>Tahun Ajaran</th>
                                <th>
                                    <i className="fa fa-bars" />
                                </th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {kelas.data.map((k, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            {index + kelas.from}
                                        </td>
                                        <td className="text-nowrap text-center">
                                            {k.guru && k.guru.nama}
                                        </td>
                                        <td className="text-nowrap text-center">
                                            {k.kelas}
                                        </td>
                                        <td className="text-nowrap text-center">
                                            {k.tahun_ajaran}
                                        </td>
                                        <td className="text-center text-nowrap">
                                            <Tbtn
                                                show={`/kelas/${k.id}`}
                                                edit={
                                                    !auth.guru &&
                                                    `/kelas/${k.id}/edit`
                                                }
                                                del={
                                                    !auth.guru &&
                                                    `/kelas/${k.id}`
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </Tbody>
                    </Table>

                    <Pagination
                        from={kelas.from}
                        to={kelas.to}
                        total={kelas.total}
                        links={kelas.links}
                    />
                </>
            ) : (
                <NoData />
            )}
        </Main>
    );
};

export default Kelas;
