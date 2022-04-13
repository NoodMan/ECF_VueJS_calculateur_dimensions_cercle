import { defineStore } from "pinia";
//persist: true,
//store : liste d'objets de type boat attention à faire : npm i pinia-plugin-persistedstate
export const Calculation = defineStore({
    id: "radius",
    state: () => ({
        n_radius: 0,
    }),
   
    getters: {
        GetPerimeter: (state) => Math.round(state.n_radius * 2 * 3.14),
        GetArea : (state) => Math.round(Math.pow(state.n_radius, 2) * 3.14),
        GetVolume: (state) => Math.round(4 * 3.14 * Math.pow(state.n_radius, 2))
       },
    actions: {
        increment() {
        },
    },
});