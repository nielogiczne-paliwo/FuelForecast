import { delivierData } from 'src/app/interface/interface';

declare function get_deliveries(
  date_start: string,
  date_end: string,
  uLG95: number,
  uLG95_max: number,
  dK: number,
  dK_max: number,
  uLTSU: number,
  uLTSU_max: number,
  uLTDK: number,
  uLTDK_max: number
): Promise<delivierData[]>; // Replace with actual types
export default get_deliveries;
