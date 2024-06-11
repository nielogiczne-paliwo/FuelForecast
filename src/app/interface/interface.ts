export interface delivierData {
  date: Date;
  ULG95: number;
  DK: number;
  ULTSU: number;
  ULTDK: number;
  moreDeliver?: boolean;
}
export interface fuel {
  maxStock: number;
  capacity: number;
  inputData: number;
}
export interface stationData {
  dateStart: Date;
  dateEnd: Date;
  ULG95: fuel;
  DK: fuel;
  ULTSU: fuel;
  ULTDK: fuel;
}
export interface moreDeliver {
  date: string;
  ULG95: number;
  DK: number;
  ULTSU: number;
  ULTDK: number;
  moreDeliver?: boolean;
}
