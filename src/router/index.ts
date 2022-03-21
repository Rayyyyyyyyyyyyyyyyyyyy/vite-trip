import { createRouter, createWebHistory } from "vue-router";
import RouterNames from "./name";

const routes = [
    {
        path: "/",
        name: RouterNames.homeLayout,
        component: () => import("@/layout/HomeLayout.vue"),
        children: [
            {
                path: "",
                name: RouterNames.home,
                component: () => import("@/view/Home.vue"),
            },
        ]
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
