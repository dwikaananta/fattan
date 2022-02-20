import React from "react";

export const getHari = (index) => {
    const hari = [
        "-",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
    ];

    return hari[parseInt(index)];
};

// Date Time
export const getBulan = (index) => {
    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mey",
        "Juni",
        "July",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    return bulan[parseInt(index)];
};

export const formDate = (date) => {
    let arr = date.split(":");
    return `${arr[0]}:${arr[1]}`;
};

export const formatDateTimestap = (date, enter = true) => {
    if (date) {
        let fullDate = date.split("T")[0];
        let fullTime = date.split("T")[1];
        fullTime = fullTime.split(".")[0];
        return (
            <>
                {fullDate.split("-").reverse().join("-")}
                {enter ? <br /> : ` || `}
                {fullTime &&
                    fullTime.split(":")[0] +
                        "." +
                        fullTime.split(":")[1] +
                        " WITA"}
            </>
        );
    } else {
        return "";
    }
};

export const formatDate = (date) => {
    if (date) {
        let d = String(date);
        let fullDate = d.split(" ")[0];
        let fullTime = d.split(" ")[1];
        return (
            <>
                {fullDate.split("-").reverse().join("-")}
                <br />
                {fullTime &&
                    fullTime.split(":")[0] +
                        "." +
                        fullTime.split(":")[1] +
                        " WITA"}
            </>
        );
    } else {
        return "";
    }
};

export const formatDiffDate = (date) => {
    if (date) {
        return date.split("|").map((i, index) => {
            return (
                <React.Fragment key={index}>
                    {i} <br />
                </React.Fragment>
            );
        });
    } else {
        return "";
    }
};
