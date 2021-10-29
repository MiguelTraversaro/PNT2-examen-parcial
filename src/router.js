import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Gastos from "./componentes/Gastos.vue"
import Respuestas from "./componentes/Respuestas.vue"

export const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", redirect: "/gastos"},
        {path: "/gastos", component: Gastos},
        {path: "/respuestas", component: Respuestas},
    ]
})