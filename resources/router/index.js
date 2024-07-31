import { createWebHashHistory, createRouter } from "vue-router";

import Login from "../components/Login";

const routes = [
    {
		path: '/login',
		name:'Login',
		component: Login
	}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;