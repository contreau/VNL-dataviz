<script setup lang="ts">
import * as d3 from "d3";
import type { team, playerData } from "../types/PlayerDataTypes";

const countryAbbreviations = {
  ARG: "Argentina",
  BRA: "Brazil",
  BUL: "Bulgaria",
  CAN: "Canada",
  CHN: "China",
  CUB: "Cuba",
  FRA: "France",
  GER: "Germany",
  IRI: "Iran",
  ITA: "Italy",
  JPN: "Japan",
  NED: "The Netherlands",
  POL: "Poland",
  SLO: "Slovenia",
  SRB: "Serbia",
  TUR: "Turkey",
  UKR: "Ukraine",
  USA: "United States",
};

// read in CSV data
const playerData = await d3.csv<playerData>("../data/VNL2025-MensCumulativeData.csv", d3.autoType);

const allTeams: team[] = d3.groups(playerData, (d) => d["Team"]);
console.log(allTeams);
</script>

<template></template>

<style></style>
