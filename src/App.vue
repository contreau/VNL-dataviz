<script setup lang="ts">
import { onMounted } from "vue";
import { initTeamData } from "./state/store";
import CountryList from "./components/CountryList.vue";
import PlayerDataView from "./components/PlayerDataView.vue";

onMounted(() => {
  initTeamData();
});
</script>

<template>
  <h1>Men's VNL 2025: Player Data by Country</h1>
  <div class="display-panel">
    <CountryList />
    <PlayerDataView />
  </div>
</template>

<style>
.display-panel {
  display: grid;
  grid-template-columns: 20% 75%;
  gap: 5%;
}
</style>
