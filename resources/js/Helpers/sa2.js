import Swal from "sweetalert2";

// Alert
export const saConfirm = (
    icon = "warning",
    title = "Are you sure ?",
    text = "Press enter to confirm !",
    showCancelButton = true
) => {
    return Swal.fire({
        title,
        text,
        icon,
        showCancelButton,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Lanjut",
        cancelButtonText: "Batal",
    });
};

export const saAlert = (
    icon = "success",
    title = "Ok",
    text = "the process has been completed"
) => {
    Swal.fire({
        icon,
        title,
        text,
    });
};

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

export const saToast = (icon = "success", title = "Ok") => {
    Toast.fire({
        icon,
        title,
    });
};
