<script setup lang="ts">
import "../../node_modules/flag-icons/css/flag-icons.min.css";
import type { CountryCode, Country } from "../types/types";
import { store } from "../state/store";

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

function selectCountryOnClick(countryCode: CountryCode) {
  if (store.value.selectedCountry !== countryCode) {
    store.value.selectedCountry = countryCode;
    console.log(store.value.selectedCountry);
  }
}
</script>

<template>
  <ul class="country-list">
    <li
      v-for="(country, code) in countries"
      @click="selectCountryOnClick(code)"
      class="country-selection"
      :class="{ selected: store.selectedCountry === code }"
    >
      <span :class="`country-flag fi ${country.flagClass}`"></span>
      <span class="country-name">{{ country.name }}</span>
    </li>
  </ul>
</template>

<style scoped>
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

.country-list li.selected {
  background-color: #ffffff;
}

.fi {
  font-size: 2rem;
}
</style>
