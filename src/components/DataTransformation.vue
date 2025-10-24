<script setup lang="ts">
import * as d3 from "d3";
import type { team, playerData, country } from "../types/PlayerDataTypes";

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
  TUR: { name: "Turkey", flagClass: "fi-tr" },
  UKR: { name: "Ukraine", flagClass: "fi-ua" },
  USA: { name: "United States", flagClass: "fi-us" },
};

// read in CSV data
const playerData = await d3.csv<playerData>("../data/VNL2025-MensCumulativeData.csv", d3.autoType);

const allTeams: team[] = d3.groups(playerData, (d) => d["Team"]);
console.log(allTeams);
</script>

<template></template>

<style></style>
