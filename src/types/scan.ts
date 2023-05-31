import { InfoType } from "./info";

export type ScanType = {
  qrId: string;
};

export type ScanResultType = {
  isSuccess: boolean;
  infoData: InfoType;
  qrId: string;
};
