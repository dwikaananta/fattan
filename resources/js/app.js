require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

import { InertiaProgress } from "@inertiajs/progress";
import { RecoilRoot } from "recoil";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(
            <RecoilRoot>
                <App {...props} />
            </RecoilRoot>,
            el
        );
    },
});

InertiaProgress.init();
