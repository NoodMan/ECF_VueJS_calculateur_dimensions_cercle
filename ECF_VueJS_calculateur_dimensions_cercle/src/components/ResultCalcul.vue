<template>
  Circle dimensions calculator
  <table>
    <thead>
      <tr>
        <th>Perimeter of the circle</th>
        <th>Area of the circle</th>
        <th>Volume of the sphere</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>{{ store.GetPerimeter }} cm</th>
        <th>{{ store.GetArea }} cm2</th>
        <th>{{ store.GetVolume }} cm3</th>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { Calculation } from "../stores/calculation";
import { mapState, mapWritableState } from "pinia";

const store = Calculation();
</script>


<style scoped>
table {
  margin: 10px;
}
table,
th,
td {
  border: 1px solid;
}
td {
  width: 600px;
  padding: 10px;
}
</style>