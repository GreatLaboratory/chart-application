<template>
  <div id="app">
    <h1>Chart.js</h1>
    <bar-chart/>
    <line-chart/>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
export default {
  name: 'app',
  components: {LineChart, BarChart},
}
</script>

<style>

</style>
