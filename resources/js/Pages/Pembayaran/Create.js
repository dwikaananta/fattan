import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Select from "../../Components/Select";
import { titleState } from "../../Storages/page";

const Create = (props) => {
    const { title, santri } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, post, processing, errors } = useForm({
        santri_id: santri.id,
    });

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/pembayaran");
    };

    return (
        <Main>
            {santri && <h3>Pembayaran Santri Atas Nama {santri.nama}</h3>}
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
        </Main>
    );
};

export default Create;
