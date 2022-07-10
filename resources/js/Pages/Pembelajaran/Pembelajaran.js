import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import NoData from "../../Components/Layouts/NoData";
import Pagination from "../../Components/Layouts/Pagination";
import Table, { Tbody, Tbtn, Thead } from "../../Components/Layouts/Table";
import { titleState } from "../../Storages/page";

const Pembelejaran = (props) => {
    const { title, pembelajaran } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { auth } = usePage().props;

    return (
        <Main titleAdd="Tambah Data" linkAdd="/pembelajaran/create">
            {pembelajaran.data && pembelajaran.data.length > 0 ? (
                <>
                    <Table>
                        <Thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Tanggal</th>
                                <th>Foto</th>
                                <th>Isi</th>
                                <th>
                                    <i className="fa fa-bars" />
                                </th>
                            </tr>
                        </Thead>
                        <Tbody>
                            {pembelajaran.data.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle text-center">
                                            {index + pembelajaran.from}
                                        </td>
                                        <td className="align-middle text-nowrap">
                                            {p.judul}
                                        </td>
                                        <td className="align-middle text-nowrap">
                                            {p.tanggal}
                                        </td>
                                        <td className="align-middle text-nowrap text-center">
                                            <img
                                                src={`/storage/pembelajaran/${p.foto}`}
                                                className="img-fluid"
                                                style={{ maxWidth: "10%" }}
                                            />
                                        </td>
                                        <td className="align-middle text-nowrap">
                                            {p.isi.length > 49
                                                ? p.isi.substring(0, 50) +
                                                  " . . . "
                                                : p.isi}
                                        </td>
                                        <td className="align-middle text-center text-nowrap">
                                            {auth.user ? (
                                                <Tbtn
                                                    show={`/pembelajaran/${p.id}`}
                                                    edit={`/pembelajaran/${p.id}/edit`}
                                                    del={`/pembelajaran/${p.id}`}
                                                />
                                            ) : (
                                                <Tbtn
                                                    show={`/pembelajaran/${p.id}`}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </Tbody>
                    </Table>

                    <Pagination
                        from={pembelajaran.from}
                        to={pembelajaran.to}
                        total={pembelajaran.total}
                        links={pembelajaran.links}
                    />
                </>
            ) : (
                <NoData />
            )}
        </Main>
    );
};

export default Pembelejaran;
