export type CountryCode =
  | "ARG"
  | "BRA"
  | "BUL"
  | "CAN"
  | "CHN"
  | "CUB"
  | "FRA"
  | "GER"
  | "IRI"
  | "ITA"
  | "JPN"
  | "NED"
  | "POL"
  | "SLO"
  | "SRB"
  | "TUR"
  | "UKR"
  | "USA";

export interface PlayerData {
  "Attack Attempts": number;
  "Attack Errors": number;
  "Attack Points": number;
  "Block Errors": number;
  "Block Points": number;
  "Dig Errors": number;
  Name: string;
  Rebounds: number;
  "Receive Attempts": number;
  "Receive Errors": number;
  "Serve Attempts": number;
  "Serve Errors": number;
  "Serve Points": number;
  "Set Attempts": number;
  "Set Errors": number;
  "Spike Digs": number;
  "Successful Receives": number;
  "Successful Sets": number;
  Team: CountryCode;
}

export type Roster = Array<PlayerData>;

export interface Team {
  country: CountryCode;
  roster: Roster;
}

export interface Country {
  name: string;
  flagClass: string;
}
