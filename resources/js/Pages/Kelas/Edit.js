import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import BtnForm from "../../Components/BtnForm";
import Main from "../../Components/Layouts/Admin/Main";
import Select from "../../Components/Select";
import { titleState } from "../../Storages/page";

const Create = (props) => {
    const { title, kelas, guru } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    const { data, setData, patch, processing, errors } = useForm(kelas);

    const handleChange = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (kelas.id) {
            patch(`/kelas/${kelas.id}`);
        }
    };

    return (
        <Main>
            {console.log(data)}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <Select
                            label="Guru"
                            name="guru_id"
                            value={data.guru_id}
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
                            value={data.kelas}
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
                            value={data.tahun_ajaran}
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
                    submitTitle="Ubah"
                    backTitle="Kembali"
                    backLink="back"
                    processing={processing}
                />
            </form>
        </Main>
    );
};

export default Create;
