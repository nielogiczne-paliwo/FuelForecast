export interface delivierData {
  date: Date;
  ULG95: number;
  DK: number;
  ULTSU: number;
  ULTDK: number;
  moreDeliver?: boolean;
}
export interface fuel {
  capacity: number;
  inputData: number;
}
export interface stationData {
  dateStart: string;
  dateEnd: string;
  ULG95: fuel;
  DK: fuel;
  ULTSU: fuel;
  ULTDK: fuel;
}
export interface weekData {
  ULG95: number;
  DK: number;
  ULTSU: number;
  ULTDK: number;
}
