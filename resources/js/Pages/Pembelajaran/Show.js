import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import { titleState } from "../../Storages/page";

const Show = (props) => {
    const { title, pembelajaran } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    return (
        <Main>
            <h4 className="text-center">{pembelajaran.judul}</h4>
            <div className="text-center">
                <img
                    src={`/storage/pembelajaran/${pembelajaran.foto}`}
                    alt=""
                    className="img-fluid"
                />
            </div>
            <p className="m-0 p-0 text-primary">{pembelajaran.tanggal}</p>
            <p>{pembelajaran.isi}</p>
            <button
                onClick={() => window.history.back()}
                className="btn btn-danger btn-sm"
            >
                Kembali
            </button>
        </Main>
    );
};

export default Show;
