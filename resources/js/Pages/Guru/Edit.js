import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Radio from "../../Components/Radio";
import Textarea from "../../Components/Textarea";
import { titleState } from "../../Storages/page";

const Edit = (props) => {
    const { title, guru } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, patch, processing, errors } = useForm(guru);

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id) {
            patch(`/guru/${data.id}`);
        }
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Input
                            name="nama"
                            label="Nama"
                            value={data.nama}
                            onChange={(e) => handleChange(e)}
                            error={errors.nama}
                        />
                    </div>
                    <div className="col-6">
                        <Input
                            name="nip"
                            label="NIP"
                            value={data.nip}
                            onChange={(e) => handleChange(e)}
                            error={errors.nip}
                        />
                    </div>
                </div>
                <Textarea
                    name="alamat"
                    label="Alamat"
                    value={data.alamat}
                    onChange={(e) => handleChange(e)}
                    error={errors.alamat}
                />
                <div className="row">
                    <div className="col-6">
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
                    <div className="col-6">
                        <Input
                            name="telp"
                            label="Telepon"
                            value={data.telp}
                            onChange={(e) => handleChange(e)}
                            error={errors.telp}
                        />
                    </div>
                </div>
                <BtnForm
                    submitTitle="Ubah"
                    backTitle="Kembali"
                    backLink="back"
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Edit;
