import { ScanType } from "@/types/scan";
import { postAuthApi } from "@/apis/authApi";
import { InfoType } from "@/types/info";

/**
 * scan후 택배 정보 보는 api
 * @params 스캔한 코드 값
 * @returns 택배 정보
 */
export const scanQrCode = async (props: ScanType) => {
  const response = await postAuthApi<InfoType, ScanType>("/qr/ready", props);

  return response;
};
