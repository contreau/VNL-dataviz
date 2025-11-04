import { reactive } from "vue";
import type { Team, Roster, CountryCode, PlayerData } from "../types/types";
import * as d3 from "d3";

type Store = {
  selectedCountry: CountryCode;
  allTeams: d3.InternMap<Team["country"], Team["roster"]> | null;
  selectedRoster: Roster;
  selectedPlayer: string;
  getTeamRoster: Function;
  updateSelectedPlayer: Function;
};

export const store = reactive<Store>({
  selectedCountry: "ARG",
  allTeams: null,
  selectedRoster: [],
  selectedPlayer: "",
  getTeamRoster(code: CountryCode) {
    this.selectedRoster = this.allTeams?.get(code)!;
  },
  updateSelectedPlayer(name: string) {
    this.selectedPlayer = name;
  },
});

export async function initTeamData() {
  const playerData = await d3.csv<PlayerData>(
    "../data/VNL2025-MensCumulativeData.csv",
    d3.autoType
  );
  const allTeams = d3.group(playerData, (d) => d["Team"]);
  // set allTeams data in the store
  store.allTeams = allTeams;
  store.selectedRoster = allTeams.get("ARG")!;
  store.selectedPlayer = store.selectedRoster[0]?.Name!;
}
