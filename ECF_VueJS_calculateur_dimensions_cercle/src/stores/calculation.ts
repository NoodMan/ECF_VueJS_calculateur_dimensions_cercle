import { defineStore } from "pinia";
//persist: true,
//store : liste d'objets de type boat attention à faire : npm i pinia-plugin-persistedstate
export const Calculation = defineStore({
    id: "radius",
    state: () => ({
        n_radius: [],
    }),
    persist: true,
    getters: {
        getCalculations: (state) => state.n_radius,
    },
    actions: {
        increment() {
        },
    },
});