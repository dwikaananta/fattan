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
    const { title, santri } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, patch, processing, errors } = useForm(santri);

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (santri.id) {
            patch(`/santri/${santri.id}`);
        }
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Input
                            label="Nama"
                            name="nama"
                            value={data.nama}
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
                            value={data.nik}
                            onChange={handleChange}
                            error={errors.nik}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            label="KK"
                            name="kk"
                            value={data.kk}
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
                            value={data.tempat_lahir}
                            onChange={handleChange}
                            error={errors.tempat_lahir}
                        />
                    </div>
                    <div className="col-4">
                        <Input
                            label="Tanggal Lahir"
                            type="date"
                            name="tanggal_lahir"
                            value={data.tanggal_lahir}
                            onChange={handleChange}
                            error={errors.tanggal_lahir}
                        />
                    </div>
                    <div className="col-4">
                        <Radio
                            inline={true}
                            name="jenis_kelamin"
                            checked={data.jenis_kelamin}
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
                            value={data.nama_ortu}
                            onChange={handleChange}
                            error={errors.nama_ortu}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            label="Telp Ortu"
                            name="telp_ortu"
                            value={data.telp_ortu}
                            onChange={handleChange}
                            error={errors.telp_ortu}
                        />
                    </div>
                </div>
                <Textarea
                    label="Alamat"
                    name="alamat"
                    value={data.alamat}
                    onChange={handleChange}
                    error={errors.alamat}
                />
                <BtnForm
                    submitTitle="Ubah"
                    backTitle="Kembali"
                    backLink="/santri"
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Create;
