<script setup lang="ts">
import { store } from "../state/store";
import type { CountryCode, Country } from "../types/types";

const countries: Record<CountryCode, Country> = {
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
  <h3>
    <span :class="`country-flag fi ${countries[store.selectedCountry].flagClass}`"></span
    >{{ store.selectedPlayer }}
  </h3>
</template>

<style scoped>
h3 {
  font-size: 3rem;
  margin-top: 0;
}

.country-flag {
  margin-right: 0.5em;
  vertical-align: 4px;
}
</style>
