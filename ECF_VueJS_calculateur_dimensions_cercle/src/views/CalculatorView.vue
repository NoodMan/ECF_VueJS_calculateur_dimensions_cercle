<template>
  <div>
    <br />
    <form @submit.prevent="add(calcul_perimeter, calcul_area)">
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
            v-model="calcul_radius.radius"
          /><br />
        </div>

        <center>
          <input type="submit" value="Results" id="submit" /><br /><br />
        </center>
      </div>
    </form>
  </div>
</template>


      
<script>
import { mapState, mapWritableState } from "pinia";
import { Calculation } from "../stores/calculation";
import { useRouter, useRoute } from "vue-router";

export default {
  data() {
    return {
      radius: {
        radius_: 0,
      },
    };
  },
};

import { mapState, mapWritableState } from "pinia";
import { reactive } from "vue";
import { Calculation } from "../stores/calculation";
import { useRouter, useRoute } from "vue-router";

const radius = reactive({
  n_radius: 0,
});
const store = Calculation();
//fonction permettant le calcul du perimetre
function calcul_perimeter() {
  //calcul du perimetre
  let perimeter = Math.round(store.radius * 2 * 3.14);
  //les données qui font references Aux chAmps inputs qui sont envoyées dans le store pour réutilisation dont la donnée d el'imc que l'on retrouvera dans le tableau recap
  store.radius = perimeter;
}

function calcul_area() {
  let Area = Math.round(3.14 * store.radius * store.radius);
}
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