import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Textarea from "../../Components/Textarea";
import { titleState } from "../../Storages/page";

const Edit = (props) => {
    const { title, pembelajaran } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, patch, processing, errors } = useForm(pembelajaran);

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pembelajaran.id) {
            patch(`/pembelajaran/${pembelajaran.id}`);
        }
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Judul"
                    name="judul"
                    value={pembelajaran.judul}
                    onChange={handleChange}
                    error={errors.judul}
                />
                <Input
                    label="Tanggal"
                    type="date"
                    name="tanggal"
                    value={pembelajaran.tanggal}
                    onChange={handleChange}
                    error={errors.tanggal}
                />
                <img
                    src={`/storage/pembelajaran/${pembelajaran.foto}`}
                    className="img-fluid"
                />
                <Input
                    label="Foto"
                    type="file"
                    name="foto"
                    onChange={handleChange}
                    error={errors.foto}
                />
                <Textarea
                    label="Isi"
                    name="isi"
                    value={pembelajaran.isi}
                    onChange={handleChange}
                    error={errors.isi}
                />
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
