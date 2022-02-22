import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Radio from "../../Components/Radio";
import Textarea from "../../Components/Textarea";
import { titleState } from "../../Storages/page";

const Create = (props) => {
    const { title } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, post, processing, errors } = useForm({});

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/santri");
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Input
                            label="Nama"
                            name="nama"
                            onChange={handleChange}
                            error={errors.nama}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Input
                            label="NIK"
                            name="nik"
                            onChange={handleChange}
                            error={errors.nik}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            label="KK"
                            name="kk"
                            onChange={handleChange}
                            error={errors.kk}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Input
                            label="Tempat Lahir"
                            name="tempat_lahir"
                            onChange={handleChange}
                            error={errors.tempat_lahir}
                        />
                    </div>
                    <div className="col-4">
                        <Input
                            label="Tanggal Lahir"
                            type="date"
                            name="tanggal_lahir"
                            onChange={handleChange}
                            error={errors.tanggal_lahir}
                        />
                    </div>
                    <div className="col-4">
                        <Radio
                            inline={true}
                            name="jenis_kelamin"
                            label="Jenis Kelamin"
                            data={[
                                {
                                    label: "Laki-Laki",
                                    id: 1,
                                    value: 1,
                                },
                                {
                                    label: "Perempuan",
                                    id: 2,
                                    value: 2,
                                },
                            ]}
                            checked={data.jenis_kelamin}
                            onChange={(e) => handleChange(e)}
                            error={errors.jenis_kelamin}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Input
                            label="Nama Ortu"
                            name="nama_ortu"
                            onChange={handleChange}
                            error={errors.nama_ortu}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            label="Telp Ortu"
                            name="telp_ortu"
                            onChange={handleChange}
                            error={errors.telp_ortu}
                        />
                    </div>
                </div>
                <Textarea
                    label="Alamat"
                    name="alamat"
                    onChange={handleChange}
                    error={errors.alamat}
                />
                <BtnForm
                    submitTitle="Tambah"
                    backTitle="Kembali"
                    backLink="/santri"
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Create;
