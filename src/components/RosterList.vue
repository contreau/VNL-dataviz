<script setup lang="ts">
import { ref } from "vue";
import { store } from "../state/store";
</script>

<template>
  <div class="list-container">
    <h3>Select Player</h3>
    <ul class="roster">
      <li
        v-for="player in store.selectedRoster"
        :value="player.Name"
        @click="store.updateSelectedPlayer(player.Name)"
        :class="{ selected: store.selectedPlayer === player.Name }"
      >
        {{ player.Name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  max-width: 250px;
}

h3 {
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 1rem;
}

.roster {
  list-style-type: none;
  padding-left: 0;
}

.roster li {
  --selected-color: #c3dbff;
  font-size: 1.25rem;
  font-weight: 350;
  padding-block: 0.5em;
  padding-left: 0.5em;
  /* background-color: #ffffff; */
  max-width: 250px;
  cursor: pointer;

  &:hover {
    background-color: var(--selected-color);
  }
}

.roster li.selected {
  background-color: var(--selected-color);
  border-right: solid 2px #000000;
}
</style>
