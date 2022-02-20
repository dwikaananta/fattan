import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Main from "../../Components/Layouts/Admin/Main";
import { titleState } from "../../Storages/page";

const Dashboard = (props) => {
    const { title } = props;
    const setTitle = useSetRecoilState(titleState);
    useEffect(() => setTitle(title), [title]);

    return <Main>{/*  */}</Main>;
};

export default Dashboard;
