<template>
  <div>
    <br />
    <form @submit.prevent="handelCalcul">
      <div class="d-flex flex-column align-items-center">
        <h1>Please enter the radius of a circle</h1>

        <br />

        <div>
          <label for="radius">Radius</label>

          <input
            type="number"
            name="radius"
            id="radius"
            min="0"
            placeholder="enter radius"
            v-model="store.n_radius"
          /><br />
        </div>

       
          <input type="submit" value="Results" id="submit" /><br /><br />
        
      </div>
    </form>
  </div>
</template>


      
<script setup>


// import { reactive } from "vue";
import { Calculation } from "../stores/calculation";


// const radius = reactive({
//   n_radius: 0,
// });
const store = Calculation();
//fonction permettant le calcul du perimetre
function handelCalcul () { 
  calcul_perimeter();
  calcul_area();
 }
function calcul_perimeter() {
  // console.log('-->⛔️ Je suis ici 🎉')
  //calcul du perimetre
  // let perimeter = Math.round(state.n_radius * 2 * 3.14);
  //les données qui font references Aux chAmps inputs qui sont envoyées dans le store pour réutilisation dont la donnée d el'imc que l'on retrouvera dans le tableau recap
  
}

// function calcul_area() {
//   let Area = Math.round(3.14 * state.n_radius * state.n_radius);
// }
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

input {
  border: 1px solid;
}
input {
  align-items: center;
}
</style>