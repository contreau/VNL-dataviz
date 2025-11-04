<script setup lang="ts">
import { store } from "../state/store";
import CountryList from "./CountryList.vue";
import PlayerDataView from "./RosterList.vue";
</script>

<template>
  <aside>
    <CountryList />
    <PlayerDataView />
  </aside>
</template>

<style>
aside {
  display: flex;
  flex-direction: column;
}
</style>
