export type team = [country: string, roster: Array<playerData>];

export interface playerData {
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
  Team: string;
}
