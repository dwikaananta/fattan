import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Input from "../../Components/Input";
import Main from "../../Components/Layouts/Admin/Main";
import Radio from "../../Components/Radio";
import Select from "../../Components/Select";
import Textarea from "../../Components/Textarea";
import { titleState } from "../../Storages/page";

const Create = (props) => {
    const { title, mapel, kelas_santri_id, kelas_id } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, post, processing, errors } = useForm({
        kelas_id: kelas_id,
    });

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/nilai-santri/${kelas_santri_id}`);
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <Select
                            label="Mapel"
                            name="mapel_id"
                            onChange={handleChange}
                            error={errors.mapel_id}
                        >
                            <option value="">Pilih</option>
                            {mapel.length > 0 &&
                                mapel.map((m, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <option value={m.id}>
                                                {m.nama}
                                            </option>
                                        </React.Fragment>
                                    );
                                })}
                        </Select>
                    </div>
                    <div className="col-6">
                        <Input
                            label="Nilai"
                            name="nilai"
                            onChange={handleChange}
                            error={errors.nilai}
                        />
                    </div>
                </div>
                <BtnForm
                    submitTitle="Tambah"
                    backTitle="Kembali"
                    backLink={`/kelas/${kelas_id}`}
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Create;
