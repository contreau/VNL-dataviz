import { ref } from "vue";
import type { Team, CountryCode, PlayerData } from "../types/types";
import * as d3 from "d3";

type Store = {
  selectedCountry: CountryCode;
  allTeams: d3.InternMap<Team["country"], Team["roster"]> | null;
};

export const store = ref<Store>({
  selectedCountry: "ARG",
  allTeams: null,
});

export async function initTeamData() {
  const playerData = await d3.csv<PlayerData>(
    "../data/VNL2025-MensCumulativeData.csv",
    d3.autoType
  );
  const allTeams = d3.group(playerData, (d) => d["Team"]);
  // set allTeams data in the store
  store.value.allTeams = allTeams;
}
