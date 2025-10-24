<script setup lang="ts">
import "../node_modules/flag-icons/css/flag-icons.min.css";
import DataTransformation from "./components/DataTransformation.vue";
import type { country } from "./types/PlayerDataTypes";

const countries: Record<string, country> = {
  ARG: { name: "Argentina", flagClass: "fi-ar" },
  BRA: { name: "Brazil", flagClass: "fi-br" },
  BUL: { name: "Bulgaria", flagClass: "fi-bg" },
  CAN: { name: "Canada", flagClass: "fi-ca" },
  CHN: { name: "China", flagClass: "fi-cn" },
  CUB: { name: "Cuba", flagClass: "fi-cu" },
  FRA: { name: "France", flagClass: "fi-fr" },
  GER: { name: "Germany", flagClass: "fi-de" },
  IRI: { name: "Iran", flagClass: "fi-ir" },
  ITA: { name: "Italy", flagClass: "fi-it" },
  JPN: { name: "Japan", flagClass: "fi-jp" },
  NED: { name: "The Netherlands", flagClass: "fi-nl" },
  POL: { name: "Poland", flagClass: "fi-pl" },
  SLO: { name: "Slovenia", flagClass: "fi-si" },
  SRB: { name: "Serbia", flagClass: "fi-rs" },
  TUR: { name: "Türkiye", flagClass: "fi-tr" },
  UKR: { name: "Ukraine", flagClass: "fi-ua" },
  USA: { name: "United States", flagClass: "fi-us" },
};
</script>

<template>
  <h1>Men's VNL 2025: Player Data by Country</h1>
  <DataTransformation />
  <ul class="country-list">
    <li v-for="(data, _) in countries" class="country-selection">
      <span :class="`country-flag fi ${data.flagClass}`"></span>
      <span class="country-name">{{ data.name }}</span>
    </li>
  </ul>
</template>

<style>
.country-list {
  list-style: none;
  padding-left: 0;
}

.country-list li {
  /* outline: solid 1px black; */
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.25rem;
  max-width: 230px;
  padding-block: 0.75em;
  padding-left: 0.5em;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
    cursor: pointer;
  }

  span.country-name {
    font-weight: 350;
  }
}

.fi {
  font-size: 2rem;
}
</style>
