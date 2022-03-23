import { saToast } from "./sa2";
import Cookies from "js-cookie";

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

export const lazyState = (state, value) => {
    let oldCookie = Cookies.get(`${window.location.pathname}/${state}`);

    if (oldCooie) {
        return oldCookie;
    } else {
        let newCookie = Cookies.set(
            `${window.location.pathname}/${state}`,
            value,
            { expires: 1 }
        );
        return;
    }
};
