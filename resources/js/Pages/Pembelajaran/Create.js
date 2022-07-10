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
        post("/pembelajaran");
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Judul"
                    name="judul"
                    onChange={handleChange}
                    error={errors.judul}
                />
                <Input
                    label="Tanggal"
                    type="date"
                    name="tanggal"
                    onChange={handleChange}
                    error={errors.tanggal}
                />
                <Input
                    label="Foto"
                    type="file"
                    name="foto"
                    onChange={(e) => {
                        setData((data) => ({
                            ...data,
                            [e.target.name]: e.target.files[0],
                        }));
                    }}
                    error={errors.foto}
                />
                <Textarea
                    label="Isi"
                    name="isi"
                    onChange={handleChange}
                    error={errors.isi}
                />
                <BtnForm
                    submitTitle="Tambah"
                    backTitle="Kembali"
                    backLink="back"
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Create;
