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

function selectCountryOnClick(code: CountryCode) {
  if (store.selectedCountry !== code) {
    store.selectedCountry = code;
    store.getTeamRoster(code);
    store.selectedPlayer = store.selectedRoster[0]?.Name!;
  }
}
</script>

<template>
  <div class="list-container">
    <h3>Select Country (Scroll)</h3>
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
  </div class="list-container">
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

.country-list {
  list-style: none;
  margin-block: 0.5rem;
  padding-left: 0;
  max-height: 248px;
  overflow-y: scroll;
  scrollbar-gutter: stable;
  --border-color: #c0c0c0;
  border-top: solid 1.5px var(--border-color);
  border-bottom: solid 1.5px var(--border-color);
}

.country-list li {
  /* outline: solid 1px black; */
  --selected-color: #c3dbff;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.25rem;
  max-width: 250px;
  padding-block: 0.75em;
  padding-left: 0.5em;
  transition: background-color 0.1s;

  &:hover {
    background-color: var(--selected-color);
    cursor: pointer;
  }

  span.country-name {
    font-weight: 400;
  }
}

.country-list li.selected {
  background-color: var(--selected-color);
}

.fi {
  font-size: 2rem;
}
</style>
