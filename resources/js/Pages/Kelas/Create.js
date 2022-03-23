import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Main from "../../Components/Layouts/Admin/Main";
import Select from "../../Components/Select";
import { titleState } from "../../Storages/page";

const Create = (props) => {
    const { title, guru } = props;
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
        post("/kelas");
    };

    return (
        <Main>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <Select
                            label="Guru"
                            name="guru_id"
                            onChange={handleChange}
                            error={errors.guru_id}
                        >
                            <option value="">Pilih</option>
                            {guru.length > 0 &&
                                guru.map((g, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <option value={g.id}>
                                                {g.nama}
                                            </option>
                                        </React.Fragment>
                                    );
                                })}
                        </Select>
                    </div>
                    <div className="col-md-6">
                        <Select
                            label="Kelas"
                            name="kelas"
                            onChange={handleChange}
                            error={errors.kelas}
                        >
                            <option value="">Pilih</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </Select>
                    </div>
                    <div className="col-md-6">
                        <Select
                            label="Tahun Ajaran"
                            name="tahun_ajaran"
                            onChange={handleChange}
                            error={errors.tahun_ajaran}
                        >
                            <option value="">Pilih</option>
                            <option value="2021/2022">2021/2022</option>
                            <option value="2022/2023">2022/2023</option>
                            <option value="2023/2024">2023/2024</option>
                            <option value="2024/2025">2024/2025</option>
                        </Select>
                    </div>
                </div>
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
