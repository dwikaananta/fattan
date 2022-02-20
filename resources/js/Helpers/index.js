import { saToast } from "./sa2";

export const isWindowView = () => {
    if (window.innerWidth >= 768) {
        return true;
    } else {
        return false;
    }
};

export const scrollToTop = () => {
    window.scrollTo(0, 0);
};

export const fetchingData = (
    icon = "success",
    title = "Loading, please wait !"
) => {
    saToast(icon, title);
};
