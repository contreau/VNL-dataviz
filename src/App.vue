<script setup lang="ts">
import { onMounted } from "vue";
import { initTeamData } from "./state/store";
import SelectionSidebar from "./components/SelectionSidebar.vue";
import { store } from "./state/store";
import PlayerData from "./components/PlayerData.vue";

onMounted(() => {
  initTeamData();
});
</script>

<template>
  <h1>Men's VNL 2025: Player Data by Country</h1>
  <main class="display-panel">
    <SelectionSidebar />
    <PlayerData />
  </main>
</template>

<style>
main {
  display: grid;
  grid-template-columns: 250px auto;
  gap: 5rem;
}
</style>
